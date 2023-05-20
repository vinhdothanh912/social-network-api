import dotenv from "dotenv";
import * as mysql from "mysql2/promise";

dotenv.config();

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,

  waitForConnections: true,
  connectionLimit: 10,
});

export { connection };
