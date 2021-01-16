import { Connection, IDatabaseDriver, MikroORM } from "@mikro-orm/core";

import { User } from "../entities/User";
import updateSchema from "../utils/updateSchema";

const main = async () => {
  const orm = await MikroORM.init();
  await updateSchema(orm);
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
