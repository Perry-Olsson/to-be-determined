import { Field, ObjectType } from "type-graphql";
import { User } from "../../../entities";
import { FieldError } from "../../../types";

@ObjectType()
export class RegisterResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field({ nullable: true })
  user?: User;
}
