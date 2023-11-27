import { eq } from "drizzle-orm";
import { db } from "../../../db";
import {type User, type InsertUser, usersTable } from "../../db/schema/users";
import { logger } from "../../logger";
import { Nullable } from "../../types/global";

export const insertUser = async  (userData: InsertUser) => {
    try {
      await  db.insert(usersTable).values(userData);
      console.log('a')
      return { success: true };
    } catch (e) {
      return { success: false };
    }
  };
  
  export const selectUserById = async (id: number) => {
    const user = await db.select().from(usersTable).where(eq(usersTable.id, id));
  
    return user[0];
  };

export const selectUserByEmail = async (
    email: string,
  ): Promise<Nullable<User>> => {
    const user = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));
  
    return user[0];
  };

type SelectAllUsers = () => Promise<
  { success: true; users: User[] } | { success: false }
>;

export const selectAllUsers: SelectAllUsers = async () => {
  try {
    const users = await db.select().from(usersTable);

    return {
      success: true,
      users,
    };
  } catch (e) {
    logger.logError(e);
    return { success: false };
  }
};
