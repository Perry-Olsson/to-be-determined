import { Field, ObjectType } from "type-graphql";
import { Todo } from "../../../entities";
import { BaseError } from "../../../types";

@ObjectType()
export class CreateTodoResponse {
  @Field(() => [BaseError], { nullable: true })
  errors?: BaseError[];

  @Field({ nullable: true })
  todo?: Todo;
}
