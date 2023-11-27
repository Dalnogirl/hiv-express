import  { Pool } from 'pg'
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";

const pool = new Pool({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'hiv'
});

export const db = drizzle(pool);