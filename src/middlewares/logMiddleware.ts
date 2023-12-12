import { NextFunction, Request, Response } from "express";

export const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const logMessage = (`${new Date().toLocaleDateString()} - ${req.url} - ${req.method}`)
    console.log(logMessage)
    //res.status(200).send(logMessage) cannot send more that 1 response for my client (controller, response)
    next()
}