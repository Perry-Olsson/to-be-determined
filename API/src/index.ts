import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import cors from "cors";
import { MikroORM } from "@mikro-orm/core";
import ormConfig from "./mikro-orm.config";
import path from "path";

import config from "./utils/config";
import updateSchemaAndCreateIndexes from "./utils/updateSchema";
import jwt from "jsonwebtoken";
import { User } from "./entities";

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

  app.get("/user/confirm/:id", async (req, res) => {
    try {
      const token = req.params.id;
      const email = jwt.verify(token, config.jwtSecret);
      const user = await orm.em.findOne(User, { email });
      if (user) {
        user.confirmed = true;
        await orm.em.flush();
        res.end();
      }
    } catch (e) {
      console.log(e);
    }
  });

  apolloServer.applyMiddleware({ app });

  app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}/graphql`);
  });
};

main();
