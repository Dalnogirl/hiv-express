import { pgTable, serial, varchar, text, integer } from 'drizzle-orm/pg-core';
// declaring enum in database
 
export const usersTable = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  email:  varchar('email', {length: 256}).notNull(),
  password: varchar('password', { length: 256 }).notNull(),
  age: integer('age')
});

export type User = typeof usersTable.$inferSelect
export type InsertUser = typeof usersTable.$inferInsert;

