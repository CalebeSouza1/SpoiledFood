import { getCustomRepository } from "typeorm"
import { ComplimentRepositories } from "../database/repositories/ComplimentRepositories"


class ListUserDishCompliments{
    async execute(user_id: string) {
        const complimentsRepositories = getCustomRepository(ComplimentRepositories)

        const compliments = await complimentsRepositories.find({});
        

        return compliments;
    }
}

export {ListUserDishCompliments}