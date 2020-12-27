import { Field, InputType } from "type-graphql";
import { MinLength, IsEmail, Length } from "class-validator";
import { IsEmailUnique } from "./IsEmailUnique";

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
  @IsEmailUnique({ message: "email already in use" })
  email: string;

  @Field()
  username: string;

  @Field()
  @MinLength(6)
  password: string;
}
