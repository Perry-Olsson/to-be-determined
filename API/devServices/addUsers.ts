import { createConnection } from "typeorm";
import bcrypt from "bcryptjs";

import { User } from "../src/entities";
import { users } from "../testResources";
import { clearUsers } from "./clearUsers";

export const addUsers = async (): Promise<void> => {
  const connection = await createConnection();
  await clearUsers();
  for (const { firstName, lastName, email, password, username } of users) {
    const hashedPassword = await bcrypt.hash(password, 0);
    await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      username,
    }).save();
  }
  connection.close();
};

addUsers();
