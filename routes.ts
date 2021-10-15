import { response, Router } from "express";
import { CreateUserController } from "./src/controllers/CreateUserController";
import { CreateDishController } from "./src/controllers/CreateDishController";
import { CreateRequestController } from "./src/controllers/CreateRequestController";
import { CreateComplimentController } from "./src/controllers/CreateComplimentController";
import { ListUserDishComplimentsController } from "./src/controllers/ListUserDishComplimentsController";
import { ListUserComplimentsController } from "./src/controllers/ListUserComplimentsController";
import { ListDishController } from "./src/controllers/ListDishController";
import { ListUsersController } from "./src/controllers/ListUsersController";


const router = Router();

const createUserController = new CreateUserController();
const createDishController = new CreateDishController();
const createRequestController = new CreateRequestController();
const createComplimentController = new CreateComplimentController();
const listUserComplimentsController = new ListUserComplimentsController()
const listUserDishComplimentsController = new ListUserDishComplimentsController

const listDishController = new ListDishController();
const listUsersController = new ListUsersController();


router.post("/users", createUserController.handle);
router.post("/dishes", createDishController.handle);
router.post("/requests", createRequestController.handle);
router.post("/compliments", createComplimentController.handle);


router.get("/users/compliments/send",listUserComplimentsController.handle)
router.get("/users/compliments/dish", listUserDishComplimentsController.handle)
router.get("/dishes", listDishController.handle)
router.get("/users",listUsersController.handle)
export { router };