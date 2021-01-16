import { MikroORM } from "@mikro-orm/core";
import { clearUsers } from "./helpers";

import updateSchema from "../utils/updateSchema";

const main = async () => {
  const orm = await MikroORM.init();
  await updateSchema(orm);
  await clearUsers(orm.em);
  orm.close();
};

main();
