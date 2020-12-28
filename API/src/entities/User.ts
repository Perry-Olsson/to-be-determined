import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ID, ObjectType, Root } from "type-graphql";

@ObjectType()
@Entity({ tableName: "users" })
export class User {
  @Field(() => ID)
  @PrimaryKey()
  id!: number;

  @Field()
  @Property({ columnType: "varchar", length: 100 })
  firstName!: string;

  @Field()
  @Property({ columnType: "varchar", length: 100 })
  lastName!: string;

  @Field(() => String)
  fullName(@Root() parent: User): string {
    return `${parent.firstName} ${parent.lastName}`;
  }

  @Field()
  @Property({ columnType: "varchar", length: 255 })
  email!: string;

  @Field()
  @Property({ columnType: "varchar", length: 50 })
  username!: string;

  @Property({ columnType: "varchar", length: 100 })
  password!: string;

  @Field(() => String)
  @Property({ columnType: "date" })
  createdAt = new Date();

  @Field(() => String)
  @Property({ columnType: "timestamp", onUpdate: () => new Date() })
  updatedAt = new Date();
}
