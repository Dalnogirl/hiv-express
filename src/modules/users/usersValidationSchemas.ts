import { z } from "zod";

export const createUserValidationSchema = z.object({
  name: z.string().min(1,"Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Provided string is not a valid email"),
  password: z
    .string()
    .min(8, "Password must contain at least 8 symbols")
    .max(40, "Password musn't contain more than 40 symbols")
    .min(1, "Password is required"),
});
