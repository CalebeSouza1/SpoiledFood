import { Request, Response } from "express"
import { CreateRequestServices } from "../services/CreateRequestServices"

class CreateRequestController {
    
    async handle(request: Request, response: Response) {
        const { dish_id, user_id, compliment_id } = request.body
        
        const createDishService = new CreateRequestServices();

        const dish = await createDishService.execute(dish_id, user_id, compliment_id); 

        return response.json(dish)
    }
}

export { CreateRequestController }