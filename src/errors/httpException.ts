type HTTPExceptionOptions = {
    message: string
}

export class HTTPException extends Error {
    status: number
    constructor(status: number, {message}: HTTPExceptionOptions) {
        super(message)
        this.status = status 
        this.message = message
    }
}

