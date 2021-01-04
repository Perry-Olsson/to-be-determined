import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class BaseError {
  @Field()
  message: string;
}

@ObjectType()
export class FieldError extends BaseError {
  @Field()
  field: string;
}

@ObjectType()
export class AuthError extends BaseError {
  constructor() {
    super();
    console.log("--------AuthError--------");
  }
  @Field({ nullable: true })
  action?: string;
}
