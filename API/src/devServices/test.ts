import { MikroORM } from "@mikro-orm/core";
import { lowerCaseUsername } from "../constants";
import { User } from "../entities";
import updateSchemaAndCreateIndexes from "../utils/updateSchema";

const main = async (): Promise<void> => {
  const orm = await MikroORM.init();
  await updateSchemaAndCreateIndexes(orm);
  await orm.em.find(User, {
    $or: [{ email: "doe.john@gmail.com" }, { [lowerCaseUsername]: "pdog" }],
  });
  orm.close();
};

main();
