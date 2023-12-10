import * as qs from 'querystring'

import APP_CONFIG from '../../config/app'
import { hmacRequest, serverErrorDataToString } from './helpers'

interface Options extends Pick<RequestInit, 'headers'> {
    baseUrl?: string
}

interface RequestParams<T = unknown> {
    url: string
    data?: T
    withHmac?: boolean
    options?: Options & {
        baseUrl?: string
        timeout?: number
        'X-Viewpals-Signature'?: string
        'X-Viewpals-Request-Timestamp'?: number
        'X-Viewpals-Nonce'?: string
    }
}

type Methods = 'GET' | 'POST' | 'PUT' | 'PATCH'

export class HttpService {
    private baseUrl: string | undefined = APP_CONFIG.HOST

    private getUrl(url: string, options?: Options) {
        if (options?.baseUrl) {
            return `${options.baseUrl}${url}`
        }
        return `${this.baseUrl}${url}`
    }

    private async request<T = unknown, P = unknown>(
        { url, options = {}, data, withHmac }: RequestParams<T>,
        method: Methods
    ): Promise<P> {
        const newOptions = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...(options.headers || {}),
            },
        }
        if (withHmac) {
            const optionsHmac = hmacRequest({
                options,
                payload: data,
                url,
                method,
            })
            newOptions.headers = {
                ...newOptions.headers,
                ...optionsHmac.headers,
            }
        }

        if (newOptions.baseUrl) {
            delete newOptions.baseUrl
        }

        if (newOptions.timeout) {
            delete newOptions.timeout
        }
        const newUrl =
            method === 'GET' && data ? `${url}?${qs.stringify(data)}` : url
        return new Promise((resolve, reject) => {
            const { timeout = APP_CONFIG.timeout } = options
            const controller = new AbortController()
            const id = setTimeout(() => controller.abort(), timeout)

            fetch(this.getUrl(newUrl, options), {
                method,
                // eslint-disable-next-line no-nested-ternary
                body:
                    method === 'GET'
                        ? undefined
                        : data
                        ? JSON.stringify(data)
                        : '',
                ...newOptions,
                signal: controller.signal,
            })
                .then(async response => {
                    const resp = await response.json()
                    // if (!resp) throw new Error('User not found');
                    if (resp?.error || resp?.detail) {
                        const msg = serverErrorDataToString(resp)
                        if (msg) {
                            throw Error(msg)
                        }
                    }
                    clearTimeout(id)
                    resolve(resp)
                })
                .catch(error => {
                    reject(error)
                    let errMessage = 'Error'
                    if (error instanceof Error) {
                        errMessage = error.message
                    }
                    throw new Error(errMessage + '\nAPI Endpoint: ' + newUrl)
                })
        })
    }

    async get<T = unknown, P = unknown>(data: RequestParams<T>): Promise<P> {
        return this.request<T, P>(data, 'GET')
    }

    async post<T = unknown, P = unknown>(data: RequestParams<T>): Promise<P> {
        return this.request<T, P>(data, 'POST')
    }
}
