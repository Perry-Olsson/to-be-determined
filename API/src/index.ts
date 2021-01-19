import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import cors from "cors";
import { MikroORM, RequestContext } from "@mikro-orm/core";
import ormConfig from "./mikro-orm.config";
import path from "path";

import config from "./utils/config";
import updateSchemaAndCreateIndexes from "./utils/updateSchema";
// import jwt from "jsonwebtoken";
// import { User } from "./entities";
// import { getSuccessHTML } from "./utils/sendMail/pages/success";
// import { getFailureHTML } from "./utils/sendMail/pages/failure";
import { ConfirmationRoute } from "./middleware/endpoints/EmailConfirmation";

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

  // app.get("/user/confirm/:id", async (req, res) => {
  //   try {
  //     const token = req.params.id;
  //     const email = jwt.verify(token, config.jwtSecret);
  //     const user = await orm.em.findOne(User, { email });
  //     if (user) {
  //       try {
  //         user.confirmed = true;
  //         await orm.em.flush();
  //         res.send(getSuccessHTML(user));
  //       } catch (e) {
  //         res.send(getFailureHTML(user));
  //       }
  //     }
  //     res.send(getFailureHTML());
  //   } catch (e) {
  //     console.log(e);
  //     res.send(getFailureHTML());
  //   }
  // });

  apolloServer.applyMiddleware({ app });

  app.listen(config.port, () => {
    console.log(`Server is running on http://localhost:${config.port}/graphql`);
  });
};

main();
