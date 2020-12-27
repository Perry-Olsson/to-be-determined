import "reflect-metadata";
import { Connection, createConnection, getRepository } from "typeorm";

const main = async (): Promise<void> => {
  const connection = await createConnection();
  await clearDb(connection);
  connection.close();
};

export const clearDb = async (connection: Connection): Promise<void> => {
  const entities: { name: string; tableName: string }[] = [];
  connection.entityMetadatas.forEach(x =>
    entities.push({ name: x.name, tableName: x.tableName })
  );
  for (const entity of entities) {
    const repository = getRepository(entity.name);
    await repository.query(`DELETE FROM ${entity.tableName}`);
  }
};

main();
