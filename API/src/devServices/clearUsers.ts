import { Connection, IDatabaseDriver, MikroORM } from "@mikro-orm/core";

import { User } from "../entities/User";

const main = async () => {
  const orm = await MikroORM.init();
  await orm.getSchemaGenerator().updateSchema();
  await clearUsers(orm);
  orm.close();
};

export const clearUsers = async (
  orm: MikroORM<IDatabaseDriver<Connection>>
): Promise<void> => {
  const em = orm.em;
  await em.nativeDelete(User, {});
};

main();
