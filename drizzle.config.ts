import type { Config } from "drizzle-kit";
 
export default {
  schema: "./src/db/schema/*",
  out: "./src/drizzle",
  driver: 'pg',
  dbCredentials: {
    connectionString: "postgres://postgres:postgres@localhost:5432/hiv",
  }
} satisfies Config;