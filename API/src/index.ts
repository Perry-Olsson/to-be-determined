import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";

// import { LoginResolver } from "./modules/user/Login";
// import { MeResolver } from "./modules/user/Me";
import cors from "cors";
import { MikroORM } from "@mikro-orm/core";
import { RegisterResolver } from "./modules/user/Register";
import { MeResolver } from "./modules/user/Me";
import { LoginResolver } from "./modules/user/Login";

const main = async () => {
  const orm = await MikroORM.init();
  await orm.getSchemaGenerator().updateSchema();

  const schema = await buildSchema({
    resolvers: [RegisterResolver, MeResolver, LoginResolver],
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }) => {
      return { req, em: orm.em.fork() };
    },
  });

  const app = express();

  app.use(cors());

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000/graphql");
  });
};

main();
