import projectServices from "../services/project.services";
import { Request, Response } from "express";
import { IProject } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
    const project: IProject = await projectServices.create(req.body);
    return res.status(201).json(project);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
    const project: IProject = await projectServices.retrieve(req.params.id);
    return res.status(200).json(project);
};

const partialUpdate = async (req: Request, res: Response): Promise<Response> => {
    const project: IProject = await projectServices.partialUpdate(req.body, req.params.id);
    return res.status(200).json(project);
};

export default { create, retrieve, partialUpdate };