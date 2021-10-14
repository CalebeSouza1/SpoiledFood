import { EntityRepository, Repository } from "typeorm"
import {Request} from '../../entities/Request'


@EntityRepository(Request)
class RequestRepositories extends Repository<Request> {}

export { RequestRepositories }; 