import { getCustomRepository } from "typeorm";
import { RequestRepositories } from "../database/repositories/RequestRepositories";

class CreateRequestServices {
  async execute(dish_id: string, user_id: string) {
    const requestRepositories = getCustomRepository(RequestRepositories);   
    const request =  requestRepositories.create({dish_id,user_id})
    await requestRepositories.save(request);

    return request;
  }
}

export { CreateRequestServices };
