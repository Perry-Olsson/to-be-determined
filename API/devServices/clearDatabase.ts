import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";

const main = async () => {
  const connection = await createConnection();
  const entities: any = [];
  connection.entityMetadatas.forEach(x =>
    entities.push({ name: x.name, tableName: x.tableName })
  );
  for (let entity of entities) {
    const repository = getRepository(entity.name);
    await repository.query(`DELETE FROM ${entity.tableName}`);
  }
  connection.close();
};

main();
