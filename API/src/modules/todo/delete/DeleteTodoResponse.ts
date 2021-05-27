import { Field, ObjectType } from "type-graphql";
import { BaseError } from "../../../types";

@ObjectType()
export class DeleteTodoResponse {
  @Field(() => [BaseError], { nullable: true })
  errors?: BaseError[];

  @Field({ nullable: true })
  success?: true;
}
