import CryptoJS from 'crypto-js'
import * as qs from 'querystring'

import APP_CONFIG from '@/config/app'

import type { ServerErrorData } from './types'

const { HOST, SECRET_KEY_HMAC } = APP_CONFIG

export const serverErrorDataToString = (
    serverError: ServerErrorData
): string => {
    const { detail, error } = serverError
    if (error && error.message) {
        return `Status code ${error.code}! ${error.message}`
    }

    if (!detail) return 'Unknown error'

    if (typeof detail === 'string') return detail

    // process server error data to string message
    const errorMsg = detail.reduce((prev, curr) => {
        const location = curr.loc.join(' ')
        const row = `${location} ${curr.msg},\n`

        const msg = prev + row
        return msg
    }, '')
    return errorMsg
}

function signString(key_b64: string, to_sign: string) {
    const key = CryptoJS.enc.Base64.parse(key_b64)

    const toSignWordArray = CryptoJS.enc.Utf8.parse(to_sign)

    const hmacSignature = CryptoJS.HmacSHA256(toSignWordArray, key)

    const hmacSignatureHex = hmacSignature.toString(CryptoJS.enc.Hex)

    const base64Signature = CryptoJS.enc.Base64.stringify(
        CryptoJS.enc.Hex.parse(hmacSignatureHex)
    )

    return base64Signature
}

export function hmacRequest<T = unknown, P = unknown>({
    options,
    payload,
    url,
    method,
}: {
    options: T
    payload: P
    url: string
    method: string
}) {
    const timeStamp = new Date().getTime().toString()
    const nonce = CryptoJS.lib.WordArray.random(16).toString()
    let data = ''
    if (payload) {
        const payloadString = JSON.stringify(payload)
        const contentBytes = CryptoJS.enc.Utf8.parse(payloadString)
        const contentHash = CryptoJS.MD5(contentBytes)
        const contentBase64String = CryptoJS.enc.Base64.stringify(contentHash)
        if (method === 'GET') {
            const params = qs.stringify(payload)
            data = `${method + HOST + url}?${params}${timeStamp}${nonce}`
        } else {
            data = method + HOST + url + timeStamp + nonce + contentBase64String
        }
    } else {
        data = method + HOST + url + timeStamp + nonce
    }
    const output = signString(SECRET_KEY_HMAC || '', data)
    return {
        ...options,
        headers: {
            'X-Viewpals-Signature': `sha256:${output}`,
            'X-Viewpals-Request-Timestamp': timeStamp,
            'X-Viewpals-Nonce': nonce,
        },
    }
}
