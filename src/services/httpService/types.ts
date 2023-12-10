export interface ErrorDetail {
    loc: string[]
    msg: string
    type: string
}

export interface ServerErrorData {
    detail?: ErrorDetail[] | string
    error?: {
        code: number
        message?: string
    }
}
