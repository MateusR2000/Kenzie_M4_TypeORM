import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import AppError from "../errors";
import { DevInfoResult, DeveloperResult } from "../interfaces";

export const infosExist = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const query: DevInfoResult = await client.query(
        'SELECT * FROM "developerInfos" WHERE "developerId" = $1',
        [req.params.id]
    );

    if(query.rowCount){
        throw new AppError("Developer infos already exists", 409);  
    }

    return next();
};

