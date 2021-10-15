import { Request, Response, NextFunction } from "express"


export function ensureAdmin(req: Request, resp: Response, next: NextFunction) {
    const admin = true;

    if(admin) {
        return next();
    }

    return resp.status(401).json({
        error: "Unauthorized!"
    });
}