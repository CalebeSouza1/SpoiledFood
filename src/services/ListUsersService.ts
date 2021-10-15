import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../database/repositories/UsersRepositories"


class ListUsersService{

    async execute() {
        const usersRepositories = getCustomRepository(UsersRepositories);
        const users = await usersRepositories.find();

        return users;
    }

}

export {ListUsersService}