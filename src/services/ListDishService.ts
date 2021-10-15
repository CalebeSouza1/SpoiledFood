import { getCustomRepository } from "typeorm"
import { DishesRepositories } from "../database/repositories/DishRepositories"



class ListDishService{

    async execute() {
        const dishRepositories = getCustomRepository(DishesRepositories);

        let dishs = await dishRepositories.find();

        dishs = dishs.map(dish => (
            {...dish, nomeCustom: `Seu pedido foi: ${dish.name}. Obrigado pela Preferência!`}
        ))

        return dishs;
    }
}

export{ ListDishService }