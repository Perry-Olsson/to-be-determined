import { Entity, Property, ManyToOne } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
import { BaseEntity } from "./BaseEntity";
import { User } from "./User";

@ObjectType()
@Entity({ tableName: "todos" })
export class Todo extends BaseEntity {
  @Field()
  @Property()
  title: string;

  @Field(() => [String])
  @Property()
  notes: string[];

  @Field(() => User)
  @ManyToOne(() => User)
  user!: User;
}
