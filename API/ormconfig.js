module.exports = {
  name: "default",
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "friday_admin",
  password: "Hank55od50ts45Riday!",
  database: "friday",
  synchronize: true,
  logging: true,
  entities: ["./src/entities/*.*"],
};
