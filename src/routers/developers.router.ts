import { Router } from "express";
import { devInfosControllers, developerControllers } from "../controllers";
import middlewares from "../middlewares";

const devRouter: Router = Router();

devRouter.post(
    "",
    middlewares.uniqueEmail,
    developerControllers.create
);

devRouter.use("/:id", middlewares.devIdExists);

devRouter.get("/:id", developerControllers.retrieve);

devRouter.patch(
    "/:id",
    middlewares.uniqueEmail,
    middlewares.devIdExists,
    developerControllers.partialUpdate
);

devRouter.delete("/:id", developerControllers.destroy);

devRouter.post(
    "/:id/infos",
    middlewares.infosExist,
    middlewares.validOS,
    devInfosControllers.create
);


export default devRouter;
