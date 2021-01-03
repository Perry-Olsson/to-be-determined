import { EntityRepository, QueryBuilder } from "@mikro-orm/postgresql";
import { User } from "../entities";

export class UserRepository extends EntityRepository<User> {
  public createQb(): QueryBuilder<User> {
    return this.createQueryBuilder();
  }
}
