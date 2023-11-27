
import { InsertUser, User } from "../../db/schema/users";
import { HTTPException } from "../../errors/httpException";
import { Nullable } from "../../types/global";

type CreateUserDiParam = {
  insertUser: (userData: InsertUser) => Promise<{ success: boolean }>;
  hashPassword: (rawPassword: string) => Promise<string>;
  selectUserByEmail: (email: string) => Promise<Nullable<User>>;
};

export const createUser = async (
  { password, name, email }: InsertUser,
  { insertUser, hashPassword, selectUserByEmail }: CreateUserDiParam,
) => {
  const hashedPassword = await hashPassword(password);
  const userWithTheSameEmail = await selectUserByEmail(email);

  if (userWithTheSameEmail) {
    throw new HTTPException(400, {
      message: `User with email "${email}" already exists`,
    });
  }

  const { success } = await insertUser({ password: hashedPassword, name, email });

  if (!success) {
    throw new HTTPException(500, {
      message: "Failed to create user",
    });
  }
  return "User has been successfully added";
};

type GetUserByIdDiParam = {
  selectUserById: (userId: number) => Promise<User>;
};

export const getUserById = async (
  userId: number,
  { selectUserById }: GetUserByIdDiParam,
) => {
  const user = await selectUserById(userId);

  if (!user)
    throw new HTTPException(404, {
      message: `User with id ${userId} was not found`,
    });

  return user;
};
type GelAllUsersDiParam = {
  selectAllUsers: () => Promise<
    { success: true; users: User[] } | { success: false }
  >;
};
export const getAllUsers = async ({ selectAllUsers }: GelAllUsersDiParam) => {
  const result = await selectAllUsers();

  if (!result.success) {
    throw new HTTPException(500, {
      message: "Failed to get all users",
    });
  }

  return result.users;
};
