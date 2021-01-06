import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import cors from "cors";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

const main = async () => {
  const orm = await MikroORM.init();
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

  app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000/graphql");
  });
};

main();
