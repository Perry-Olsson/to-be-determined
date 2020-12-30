import { Field, InputType, UseMiddleware } from "type-graphql";
import { MinLength, IsEmail, Length } from "class-validator";
import { isEmailUnique } from "../../../middleware/isEmailUnique";

@InputType()
export class RegisterInput {
  @Field()
  @Length(1, 100)
  firstName: string;

  @Field()
  @Length(1, 100)
  lastName: string;

  @Field()
  @IsEmail()
  @UseMiddleware(isEmailUnique)
  email: string;

  @Field()
  username: string;

  @Field()
  @MinLength(6)
  password: string;
}
