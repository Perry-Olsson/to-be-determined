import { Field, ObjectType } from "type-graphql";
import { User } from "../../../entities/User";
import { BaseError } from "../../../types";

@ObjectType()
export class LoginResponse {
  @Field(() => [BaseError], { nullable: true })
  errors?: BaseError;

  @Field({ nullable: true })
  user?: User;

  @Field({ nullable: true })
  token?: string;
}
