import { Field, InputType } from "type-graphql";

@InputType()
export default class AuthorizeInput {
  @Field()
  email: string;

  @Field()
  password: string;
}
