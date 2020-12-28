import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema, Query, Resolver } from "type-graphql";

// import { RegisterResolver } from "./modules/user/Register";
// import { LoginResolver } from "./modules/user/Login";
// import { MeResolver } from "./modules/user/Me";
import cors from "cors";
import { MikroORM } from "@mikro-orm/core";

@Resolver()
class HelloResolver {
  @Query()
  hello(): string {
    return "hello world!";
  }
}

const main = async () => {
  const orm = await MikroORM.init();
  orm.getMigrator().up();
  console.log(orm.em); // access EntityManager via `em` property

  const schema = await buildSchema({
    resolvers: [HelloResolver],
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }) => ({ req }),
  });

  const app = express();

  app.use(cors());

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000/graphql");
  });
};

main();
