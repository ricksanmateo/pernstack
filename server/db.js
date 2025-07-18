import { Pool } from "pg";

export function getDbPool() {
  return new Pool({
    user: "postgres",
    host: "localhost",
    database: "perntodo",
    password: "sanmateo",
    port: 5432,
  });
}
