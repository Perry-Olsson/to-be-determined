import { Field, ID, ObjectType, Root } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@ObjectType()
@Entity("users")
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: "varchar", length: 50 })
  firstName: string;

  @Field()
  @Column({ type: "varchar", length: 50 })
  lastName: string;

  @Field(() => String)
  fullName(@Root() parent: User) {
    return `${parent.firstName} ${parent.lastName}`;
  }

  @Field()
  @Column({ type: "text", unique: true })
  email: string;

  @Field()
  @Column({ type: "varchar", length: 50, unique: true })
  username: string;

  @Column({ type: "varchar", length: 60 })
  password: string;
}
