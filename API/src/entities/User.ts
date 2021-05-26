import {
  Entity,
  EntityRepositoryType,
  Property,
  OneToMany,
} from "@mikro-orm/core";
import { Field, ObjectType, Root } from "type-graphql";
import { UserRepository } from "../repositories/user/UserRepository";
import { BaseEntity } from "./BaseEntity";
import { Todo } from "./Todo";

@ObjectType()
@Entity({ tableName: "users", customRepository: () => UserRepository })
export class User extends BaseEntity {
  [EntityRepositoryType]?: UserRepository;

  @Field()
  @Property({ columnType: "varchar(60)", length: 100 })
  firstName!: string;

  @Field()
  @Property({ columnType: "varchar(60)" })
  lastName!: string;

  @Field(() => String)
  fullName(@Root() parent: User): string {
    return `${parent.firstName} ${parent.lastName}`;
  }

  @Field()
  @Property({ columnType: "varchar(100)", unique: true })
  email!: string;

  @Field()
  @Property({ columnType: "varchar(60)", unique: true })
  username!: string;

  @Property({ columnType: "varchar(60)" })
  password!: string;

  @Field()
  @Property({ default: false })
  confirmed: boolean;

  @Field(() => [Todo])
  @OneToMany(() => Todo, (todo) => todo.user)
  todos: Todo[];
}
