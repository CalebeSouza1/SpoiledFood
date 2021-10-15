import { Request, Response } from "express";
import { ListDishService } from "../services/ListDishService";

class ListDishController{
    async handle(req: Request, res: Response) {
        const listDishService = new ListDishService();

        const dishs = await listDishService.execute();

        return res.json(dishs); 
    }
}


export{ListDishController}