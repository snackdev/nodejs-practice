import {NextFunction, Request, Response} from "express";


const timeLogger = (req: Request, res: Response, next: NextFunction) => {
    console.log(new Date().getTime());
    next();
}

export const Logger = {
    timeLogger
}