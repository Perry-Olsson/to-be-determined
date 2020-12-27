import { createConnection, getRepository } from "typeorm";

const main = async (): Promise<void> => {
  const connection = await createConnection();
  await clearUsers();
  connection.close();
};

export const clearUsers = async (): Promise<void> => {
  const userRepository = getRepository("User");
  await userRepository.query("DELETE FROM users");
};

main();
