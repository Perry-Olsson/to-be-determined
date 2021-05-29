import { __prod__ } from "./constants";
import path from "path";
import config from "./utils/config";
import { Connection, IDatabaseDriver, Options } from "@mikro-orm/core";

export default {
  migrations: {
    path: path.resolve(__dirname, "migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
    disableForeignKeys: true,
  },
  driverOptions: {
    connection: { ssl: false },
  },
  entities: [path.resolve(__dirname, "./entities/**/*.js")],
  entitiesTs: [path.resolve(__dirname, "./entities/**/*.ts")],
  clientUrl: config.databaseUrl,
  type: "postgresql",
  debug: !__prod__,
} as Options<IDatabaseDriver<Connection>>;
