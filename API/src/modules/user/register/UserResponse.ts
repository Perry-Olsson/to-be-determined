import { Field, ObjectType } from "type-graphql";
import { User } from "../../../entities";
import { FieldError } from "../../../types/graphql/Errors";

@ObjectType()
export class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field({ nullable: true })
  user?: User;
}
