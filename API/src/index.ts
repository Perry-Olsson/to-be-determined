import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import cors from "cors";
import { MikroORM, RequestContext } from "@mikro-orm/core";
import ormConfig from "./mikro-orm.config";
import path from "path";

import config from "./utils/config";
import updateSchemaAndCreateIndexes from "./utils/updateSchema";
import { ConfirmationRoute } from "./middleware/endpoints";

const main = async () => {
  const orm = await MikroORM.init(ormConfig);
  await updateSchemaAndCreateIndexes(orm);

  const schema = await buildSchema({
    resolvers: [path.resolve(__dirname, "modules/**/*Resolver.{ts,js}")],
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }) => ({
      req,
      em: orm.em.fork(),
    }),
    playground: true,
  });

  const app = express();

  app.use(cors());

  app.use((_, __, next) => {
    RequestContext.create(orm.em, next);
  });

  app.use("/user/confirm", ConfirmationRoute);

  apolloServer.applyMiddleware({ app });

  app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}/graphql`);
  });
};

main();
