import { Request, Response, NextFunction } from "express";
import AppError from "../errors";

export const validOS = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    if(req.body.preferredOS !== "Windows" && req.body.preferredOS !== "MacOS" && req.body.preferredOS !== "Linux"){
        throw new AppError("Invalid OS option", 400);
    }

    return next();
}