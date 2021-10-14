import { getCustomRepository } from "typeorm"
import { DishesRepositories } from "../database/repositories/DishRepositories"

class CreateDishService {
    async execute(name: string) {
        const dishesRepositories = getCustomRepository(DishesRepositories);   
        
        if(!name) {
            throw new Error ("Incorrect name!")
        }

        const dishAlreadyExists = await dishesRepositories.findOne({
            name,
        });

        if(dishAlreadyExists) {
            throw new Error ("Dish already exists!"); 
        }

        const dish = dishesRepositories.create({
            name
        });

        await dishesRepositories.save(dish);

        return dish;
    }
}

export{ CreateDishService }