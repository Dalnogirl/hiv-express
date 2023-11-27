import bcrypt from "bcrypt";

export const hashPassword = (rawPassword: string) => {
  const hashedPassword = bcrypt
  .hash(rawPassword, 10)

  return hashedPassword;
};