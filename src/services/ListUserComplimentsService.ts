import { getCustomRepository } from "typeorm"
import { ComplimentRepositories } from "../database/repositories/ComplimentRepositories"


class ListUserComplimentsService{
    async execute(user_id: string) {
        const complimentsRepositories = getCustomRepository(ComplimentRepositories)

        const compliments = await complimentsRepositories.find({
            where: {
                id: user_id,
            }
        });
        

        return compliments;
    }
}

export {ListUserComplimentsService}