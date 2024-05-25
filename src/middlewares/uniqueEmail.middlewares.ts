import { Request, Response, NextFunction } from "express";
import { DeveloperResult } from "../interfaces";
import { client } from "../database";
import AppError from "../errors";

export const uniqueEmail = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const { email } = req.body;
    console.log(email)
    if(!email) return next();

    const query: DeveloperResult = await client.query(
        'SELECT * FROM "developers" WHERE "email" = $1',
        [email]
    );

    if(query.rowCount>0){
        console.log(query.rowCount)
        throw new AppError("Email already exists", 409);
    }

    return next();
};