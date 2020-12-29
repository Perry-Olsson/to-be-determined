import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ID, ObjectType, Root } from "type-graphql";

@ObjectType()
@Entity({ tableName: "users" })
export class User {
  @Field(() => ID)
  @PrimaryKey()
  id!: number;

  @Field()
  @Property({ columnType: "varchar(60)", length: 100 })
  firstName!: string;

  @Field()
  @Property({ columnType: "varchar(60)" })
  lastName!: string;

  @Field(() => String)
  fullName(@Root() parent: User): string {
    return `${parent.firstName} ${parent.lastName}`;
  }

  @Field()
  @Property({ columnType: "varchar(100)", unique: true })
  email!: string;

  @Field()
  @Property({ columnType: "varchar(60)", unique: true })
  username!: string;

  @Property({ columnType: "varchar(255)" })
  password!: string;

  @Field(() => String)
  @Property({ columnType: "date" })
  createdAt = new Date();

  @Field(() => String)
  @Property({ columnType: "timestamp", onUpdate: () => new Date() })
  updatedAt = new Date();
}
