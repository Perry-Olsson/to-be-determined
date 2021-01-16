import { Connection, IDatabaseDriver, MikroORM } from "@mikro-orm/core";

const updateSchema = async (
  orm: MikroORM<IDatabaseDriver<Connection>>
): Promise<void> => {
  const generator = orm.getSchemaGenerator();
  await generator.updateSchema();
  await generator.execute(
    "CREATE INDEX lower_username_index ON users (lower(username))"
  );
  return;
};

export default updateSchema;
