import { Field, ObjectType } from "type-graphql";
import { User } from "../../../entities/User";

@ObjectType()
export default class LoginPayload {
  @Field()
  user: User;

  @Field()
  token: string;
}
