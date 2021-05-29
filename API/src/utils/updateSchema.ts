import { Connection, IDatabaseDriver, MikroORM } from "@mikro-orm/core";

const updateSchemaAndCreateIndexes = async (
  orm: MikroORM<IDatabaseDriver<Connection>>
): Promise<void> => {
  const generator = orm.getSchemaGenerator();
  await generator.updateSchema();
  await generator.execute(
    "ALTER TABLE users ALTER COLUMN username TYPE citext;"
  );
  return;
};

export default updateSchemaAndCreateIndexes;
