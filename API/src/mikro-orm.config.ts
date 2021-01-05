import { __prod__ } from "./constants";
import path from "path";
import config from "./utils/config";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
    disableForeignKeys: true,
  },
  entities: ["./src/entities/**/*.ts"],
  dbName: config.database,
  type: "postgresql",
  host: "localhost",
  port: config.databasePort,
  user: config.databaseUser,
  password: config.databasePassword,
  debug: !__prod__,
} as const;
