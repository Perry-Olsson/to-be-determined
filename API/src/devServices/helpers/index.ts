import { Connection, EntityManager, IDatabaseDriver } from "@mikro-orm/core";
import bcrypt from "bcryptjs";

import { User } from "../../entities";
import { users } from "../../testResources";

export const addUsers = async (
  em: EntityManager<IDatabaseDriver<Connection>>
): Promise<void> => {
  for (const userInput of users) {
    const hashedPassword = await bcrypt.hash(userInput.password, 2);
    const user = em.create(User, {
      ...userInput,
      password: hashedPassword,
    });
    em.persist(user);
  }
  await em.flush();
};

export const clearUsers = async (
  em: EntityManager<IDatabaseDriver<Connection>>
): Promise<void> => {
  await em.nativeDelete(User, {});
};
