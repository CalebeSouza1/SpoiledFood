import { Request, response, Response } from "express";
import { ListUserComplimentsService } from "../services/ListUserComplimentsService";



class ListUserComplimentsController{
    async handle(req: Request, resp: Response) {
        const { user_id } = req.params;

        const listUserComplimentsService = new ListUserComplimentsService();

        const compliments = await listUserComplimentsService.execute(user_id);

        return response.json(compliments);
    }    

}

export {ListUserComplimentsController}