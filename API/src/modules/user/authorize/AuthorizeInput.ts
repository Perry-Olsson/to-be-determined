import { Field, InputType } from "type-graphql";

@InputType()
export default class AuthorizeInput {
  @Field()
  username: string;

  @Field()
  password: string;
}
