import { __prod__ } from "./constants";
import path from "path";
import config from "./utils/config";
import { Connection, IDatabaseDriver, Options } from "@mikro-orm/core";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
    disableForeignKeys: true,
  },
  entities: [path.resolve(__dirname, "./entities/**/*.js")],
  entitiesTs: [path.resolve(__dirname, "./entities/**/*.ts")],
  dbName: config.database,
  type: "postgresql",
  host: "localhost",
  port: config.databasePort,
  user: config.databaseUser,
  password: config.databasePassword,
  debug: !__prod__,
} as Options<IDatabaseDriver<Connection>>;
