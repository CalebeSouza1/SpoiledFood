import { EntityRepository, Repository } from "typeorm"
import { Dish } from "../../entities/Dish"


@EntityRepository(Dish)
class DishesRepositories extends Repository<Dish> {}

export { DishesRepositories }; 