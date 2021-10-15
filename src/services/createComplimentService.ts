import { getCustomRepository } from "typeorm"
import { ComplimentRepositories } from "../database/repositories/ComplimentRepositories"

interface IComplimentRequest {
    message: string;
}

class CreateComplimentService{
    async execute( { message}: IComplimentRequest) {
        const complimentRepositories = getCustomRepository(ComplimentRepositories)

        const compliment = complimentRepositories.create({
            message
        });
        
        await complimentRepositories.save(compliment);

        return compliment;
    }
}

export {CreateComplimentService}