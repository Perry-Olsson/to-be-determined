import { Field, ObjectType } from "type-graphql";
import { BaseError } from "../types";

@ObjectType()
export class DeleteResponse {
  @Field({ nullable: true })
  success?: boolean;

  @Field(() => [BaseError], { nullable: true })
  errors?: BaseError[];
}
