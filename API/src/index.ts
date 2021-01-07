import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import cors from "cors";
import { MikroORM } from "@mikro-orm/core";
import ormConfig from "./mikro-orm.config";
import path from "path";

import config from "./utils/config";

const main = async () => {
  const orm = await MikroORM.init(ormConfig);
  await orm.getSchemaGenerator().updateSchema();

  const schema = await buildSchema({
    resolvers: [
      path.join(__dirname, "./modules/user/{Login,Register,Me}.{ts,js}"),
    ],
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }) => ({
      req,
      em: orm.em.fork(),
    }),
  });

  const app = express();

  app.use(cors());

  apolloServer.applyMiddleware({ app });

  app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}/graphql`);
  });
};

main();
