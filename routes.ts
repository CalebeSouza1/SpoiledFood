import { response, Router } from "express";
import { CreateUserController } from "./src/controllers/CreateUserController";
import { CreateDishController } from "./src/controllers/CreateDishController";
import { CreateRequestController } from "./src/controllers/CreateRequestController";
import { CreateComplimentController } from "./src/controllers/CreateComplimentController";


const router = Router();

const createUserController = new CreateUserController();
const createDishController = new CreateDishController();
const createRequestController = new CreateRequestController();
const createComplimentController = new CreateComplimentController();

router.post("/users", createUserController.handle);
router.post("/dishes", createDishController.handle);
router.post("/requests", createRequestController.handle);
router.post("/compliments", createComplimentController.handle);


export { router };