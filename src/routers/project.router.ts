import { Router } from "express";
import middlewares from "../middlewares";
import { projectControllers } from "../controllers";

const projectRouter: Router = Router();

projectRouter.post(
    "",
    middlewares.devIdExists,
    projectControllers.create
)

projectRouter.use("/:id", middlewares.projectIdExists);

projectRouter.get("/:id", projectControllers.retrieve);

projectRouter.patch(
    "/:id",
    middlewares.devIdExists,
    middlewares.projectIdExists,
    projectControllers.partialUpdate
)

export default projectRouter;