import { Field, InputType } from "type-graphql";
import { MinLength, Length } from "class-validator";

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
  @MinLength(6)
  password: string;
}
