import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import cors from "cors";
import { MikroORM } from "@mikro-orm/core";
import ormConfig from "./mikro-orm.config";
import path from "path";

import config from "./utils/config";
import updateSchema from "./utils/updateSchema";

const main = async () => {
  const orm = await MikroORM.init(ormConfig);
  await updateSchema(orm);

  const schema = await buildSchema({
    resolvers: [path.resolve(__dirname, "modules/**/*Resolver.{ts,js}")],
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
