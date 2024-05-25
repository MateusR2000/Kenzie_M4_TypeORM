import  handleErrors  from "./handleErrors.middleware";
import { uniqueEmail } from "./uniqueEmail.middlewares";
import { devIdExists } from "./devIdExists.middleware";
import { infosExist } from "./infosExist.middleware";
import { validOS } from "./validOS.middleware";
import { projectIdExists } from "./projectIdExists.middleware";

export default { handleErrors, uniqueEmail, devIdExists, infosExist, validOS, projectIdExists };