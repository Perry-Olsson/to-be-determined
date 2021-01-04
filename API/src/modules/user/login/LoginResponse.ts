import { Field, ObjectType } from "type-graphql";
import { User } from "../../../entities/User";
import { BaseError } from "../../../types";

@ObjectType()
export default class LoginResponse {
  @Field(() => [BaseError], { nullable: true })
  errors?: BaseError;

  @Field({ nullable: true })
  user?: User;

  @Field({ nullable: true })
  token?: string;
}
