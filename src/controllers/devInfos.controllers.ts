import { Request, Response } from "express";
import { IDevInfo, DevInfoCreate } from "../interfaces";
import { devInfosServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const payload: DevInfoCreate = { ...req.body, developerId: req.params.id};
    const devInfos: IDevInfo = await devInfosServices.create(payload);

    return res.status(201).json(devInfos);
};

export default { create };