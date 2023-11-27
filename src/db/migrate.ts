
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import  { Pool } from 'pg'

// create the connection
const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432, // default Postgres port
    database: 'hiv'
  })
 
const db = drizzle(pool);
 
// this will automatically run needed migrations on the database
const runMigration = async () => {
    console.log('Migration has started')
    await migrate(db, { migrationsFolder: './drizzle' });
    console.log('Migration has ended successfully')
    process.exit(0)
}

runMigration().catch(console.error)