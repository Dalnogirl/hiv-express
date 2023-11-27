
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg'
import { faker } from "@faker-js/faker";
import { hashPassword } from '../modules/users/usersUtils';
import { type InsertUser, usersTable } from './schema/users';

const seed = async () => {
    // create the connection
    const pool = new Pool({
        user: 'postgres',
        password: 'postgres',
        host: 'localhost',
        port: 5432, 
        database: 'hiv'
    })

    const db = drizzle(pool);

    console.log('Seeding users...')
    
    const passwordsPromise = Array.from({ length: 20 }, async () => hashPassword(faker.internet.password()))

    const fakeUsers: InsertUser[] = (await Promise.all(passwordsPromise)).map(password => ({
        name: faker.internet.userName(),
        email: faker.internet.email(),
        password,
        age: Math.ceil(Math.random() * 100) + 18
    }))
    await db.insert(usersTable).values(fakeUsers)

    console.log('Users table has been seeded successfully!')
}

seed()