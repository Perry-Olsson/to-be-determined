import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Confirmation {
  @Field({ nullable: true })
  confirmed: boolean;
}
