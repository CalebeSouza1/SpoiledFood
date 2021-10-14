import { Request, Response } from "express"
import { CreateDishService } from "../services/CreateDishService"

class CreateDishController {
    
    async handle(req: Request, res: Response) {
        const { name } = req.body
        
        const createRequestService = new CreateDishService();

        const request = await createRequestService.execute(name); 

        return res.json(request)
    }
}

export { CreateDishController }