import { Field, ObjectType } from "type-graphql";
import { Todo } from "../../../entities";
import { FieldError, BaseError } from "../../../types";

@ObjectType()
export class CreateTodoResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: BaseError[];

  @Field({ nullable: true })
  todo?: Todo;
}
