import { createConnection, getRepository } from "typeorm";
import bcrypt from "bcryptjs";

import { User } from "../src/entities";
import { users } from "../testResources";
import { clearUsers } from "./clearUsers";

export const addUsers = async (): Promise<void> => {
  const connection = await createConnection();
  clearUsers().then(async () => {
    for (const { firstName, lastName, email, password, username } of users) {
      const userRepository = getRepository(User);
      const hashedPassword = await bcrypt.hash(password, 0);
      await userRepository
        .create({
          firstName,
          lastName,
          email,
          password: hashedPassword,
          username,
        })
        .save();
    }
    connection.close();
  });
};

addUsers();
