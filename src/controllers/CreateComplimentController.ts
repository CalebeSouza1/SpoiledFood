import { Request, Response } from "express";
import { CreateComplimentService } from "../services/createComplimentService";



class CreateComplimentController{

    async handle(req: Request, res: Response) {
        const { message } = req.body;

        const createComplimentService = new CreateComplimentService();

        const compliment = await createComplimentService.execute({
            message
        });
        return res.json(compliment);
    }
}

export {CreateComplimentController}