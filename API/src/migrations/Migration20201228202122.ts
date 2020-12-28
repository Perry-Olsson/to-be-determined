import { Migration } from '@mikro-orm/migrations';

export class Migration20201228202122 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "users" ("id" serial primary key, "first_name" varchar not null, "last_name" varchar not null, "email" varchar not null, "username" varchar not null, "password" varchar not null, "created_at" date not null, "updated_at" timestamp not null);');
  }

}
