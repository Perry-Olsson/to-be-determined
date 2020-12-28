import { __prod__ } from "./constants";
import { User } from "./entities";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
    disableForeignKeys: true,
  },
  entities: [User],
  dbName: "friday",
  type: "postgresql",
  host: "localhost",
  port: 5432,
  user: "friday_admin",
  password: "Hank55od50ts45Riday!",
  debug: !__prod__,
  // clientUrl: "http://localhost:5432", // defaults to 'mongodb://localhost:27017' for mongodb driver
} as const;
