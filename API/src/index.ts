import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import cors from "cors";
import { MikroORM, RequestContext } from "@mikro-orm/core";
import ormConfig from "./mikro-orm.config";
import path from "path";
import http from "http";
import config from "./utils/config";
import { ConfirmationRoute } from "./middleware/endpoints";
import { PubSub } from "apollo-server-express";

export const pubSub = new PubSub();

const main = async () => {
  const orm = await MikroORM.init(ormConfig);

  const schema = await buildSchema({
    resolvers: [path.resolve(__dirname, "modules/**/*Resolver.{ts,js}")],
    pubSub,
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }) => ({
      req,
      em: orm.em.fork(),
    }),
    subscriptions: {
      path: "/subscriptions",
    },
    playground: true,
  });

  const app = express();

  app.use(cors());

  app.use((_, __, next) => {
    RequestContext.create(orm.em, next);
  });

  if (config.slowInternet)
    app.use(async (_, __, next) => {
      await new Promise((res) =>
        setTimeout(() => {
          res("");
        }, 2000)
      );
      next();
    });

  app.use("/user/confirm", ConfirmationRoute);

  const httpServer = http.createServer(app);

  apolloServer.applyMiddleware({ app });
  apolloServer.installSubscriptionHandlers(httpServer);

  httpServer.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}/graphql`);
  });
};

main();
