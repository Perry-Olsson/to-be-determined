import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Confirmation {
  @Field()
  confirmed: boolean;
}
