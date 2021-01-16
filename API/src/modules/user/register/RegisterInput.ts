import { Field, InputType } from "type-graphql";
import { Length } from "class-validator";

@InputType()
export class RegisterInput {
  @Field()
  @Length(1, 100)
  firstName: string;

  @Field()
  @Length(1, 100)
  lastName: string;

  @Field()
  email: string;

  @Field()
  username: string;

  @Field()
  password: string;
}
