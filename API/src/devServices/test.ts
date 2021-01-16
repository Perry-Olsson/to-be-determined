import { MikroORM } from "@mikro-orm/core";
import { lowerCaseUsername } from "../constants";
import { User } from "../entities";
import updateSchema from "../utils/updateSchema";

const main = async (): Promise<void> => {
  const orm = await MikroORM.init();
  await updateSchema(orm);
  const orQuery = await orm.em.find(User, {
    $or: [{ email: "doe.john@gmail.com" }, { [lowerCaseUsername]: "pdog" }],
  });
  console.log(orQuery);
  orm.close();
};

main();
