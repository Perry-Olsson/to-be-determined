import { Connection, IDatabaseDriver, MikroORM } from "@mikro-orm/core";
import bcrypt from "bcryptjs";

import { User } from "../entities/User";
import { users } from "../testResources";
import updateSchema from "../utils/updateSchema";
import { clearUsers } from "./clearUsers";

const main = async () => {
  const orm = await MikroORM.init();
  await updateSchema(orm);
  await clearUsers(orm);
  await addUsers(orm);
  orm.close();
};

export const addUsers = async (
  orm: MikroORM<IDatabaseDriver<Connection>>
): Promise<void> => {
  const em = orm.em;
  for (const userInput of users) {
    const hashedPassword = await bcrypt.hash(userInput.password, 2);
    const user = em.create(User, { ...userInput, password: hashedPassword });
    em.persist(user);
  }
  await em.flush();
};

main();
