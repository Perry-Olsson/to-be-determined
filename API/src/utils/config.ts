import dotenv from "dotenv";
dotenv.config();

export default {
  jwtSecret: process.env.SECRET,
  database: process.env.DATABASE,
  databaseUser: process.env.DB_USER,
  databasePassword: process.env.DB_PASSWORD,
  databasePort: Number(process.env.DB_PORT),
} as Config;

interface Config {
  jwtSecret: string;
  database: string;
  databaseUser: string;
  databasePassword: string;
  databasePort: number;
}
