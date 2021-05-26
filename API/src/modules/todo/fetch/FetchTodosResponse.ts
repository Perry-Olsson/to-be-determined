import { Field, ObjectType } from "type-graphql";
import { Todo } from "../../../entities";
import { BaseError } from "../../../types";

@ObjectType()
export class FetchTodosResponse {
  @Field(() => [BaseError], { nullable: true })
  errors?: BaseError[];

  @Field(() => [Todo], { nullable: true })
  todos?: Todo[];
}
