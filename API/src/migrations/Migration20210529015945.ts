import { Migration } from "@mikro-orm/migrations";

export class Migration20210529015945 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "users" ("id" serial primary key, "created_at" date not null, "updated_at" timestamp not null, "first_name" varchar(60) not null, "last_name" varchar(60) not null, "email" varchar(100) not null, "username" varchar(60) not null, "password" varchar(60) not null, "confirmed" bool not null default false);'
    );
    this.addSql(
      'alter table "users" add constraint "users_email_unique" unique ("email");'
    );
    this.addSql(
      'alter table "users" add constraint "users_username_unique" unique ("username");'
    );

    this.addSql(
      'create table "todos" ("id" serial primary key, "created_at" date not null, "updated_at" timestamp not null, "title" varchar(255) not null, "notes" text[] not null, "user_id" int4 not null);'
    );

    this.addSql(
      'alter table "todos" add constraint "todos_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade;'
    );
    this.addSql("ALTER TABLE users ALTER COLUMN username TYPE CITEXT");
  }
}
