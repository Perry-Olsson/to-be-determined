import { __prod__ } from "./constants";
import path from "path";
import config from "./utils/config";
import { Connection, IDatabaseDriver, Options } from "@mikro-orm/core";

const driverOptions = () => {
  return __prod__ ? { connection: { ssl: { rejectUnauthorized: false } } } : {};
};

export default {
  migrations: {
    path: path.resolve(__dirname, "migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
    disableForeignKeys: false,
  },
  driverOptions: driverOptions(),
  entities: [path.resolve(__dirname, "./entities/**/*.js")],
  entitiesTs: [path.resolve(__dirname, "./entities/**/*.ts")],
  clientUrl: config.databaseUrl,
  type: "postgresql",
  debug: !__prod__,
} as Options<IDatabaseDriver<Connection>>;
