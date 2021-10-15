import { Request, response, Response } from "express";
import { ListUserDishCompliments } from "../services/ListUserDishCompliments";



class ListUserDishComplimentsController{
    async handle(req: Request, resp: Response) {
        const { user_id } = req.params;

        const listUserDishCompliments = new ListUserDishCompliments();

        const compliments = await listUserDishCompliments.execute(user_id);

        return response.json(compliments);
    }    

}

export {ListUserDishComplimentsController}