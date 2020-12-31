import { PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ID } from "type-graphql";

export abstract class BaseEntity {
  @Field(() => ID)
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property({ columnType: "date" })
  createdAt = new Date();

  @Field(() => String)
  @Property({ columnType: "timestamp", onUpdate: () => new Date() })
  updatedAt = new Date();
}
