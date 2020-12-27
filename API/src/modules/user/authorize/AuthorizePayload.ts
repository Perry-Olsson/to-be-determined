import { Field, ObjectType } from "type-graphql";
import { User } from "../../../entities/User";

@ObjectType()
export default class AuthorizePayload {
  @Field()
  user: User;

  @Field()
  token: string;
}
