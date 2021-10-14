import { response, Router } from "express";
import { CreateUserController } from "./src/controllers/CreateUserController";
import { CreateDishController } from "./src/controllers/CreateDishController";
import { ensureAdmin } from "./src/middlewares/ensureAdmin";
import { CreateRequestController } from "./src/controllers/CreateRequestController";


const router = Router();

const createUserController = new CreateUserController();
const createDishController = new CreateDishController();
const createRequestController = new CreateRequestController();


router.post("/users", createUserController.handle);
router.post("/dishes", createDishController.handle);
router.post("/requests", createRequestController.handle);



export { router };