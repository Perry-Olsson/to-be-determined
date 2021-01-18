import { MikroORM } from "@mikro-orm/core";

import { addUsers, clearUsers } from "./helpers";
import updateSchemaAndCreateIndexes from "../utils/updateSchema";

const main = async () => {
  const orm = await MikroORM.init();
  await updateSchemaAndCreateIndexes(orm);
  await clearUsers(orm.em);
  await addUsers(orm.em);
  orm.close();
};

main();
