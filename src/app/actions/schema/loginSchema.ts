import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().min(4, { message: "Email is required" }),
  password: z.string().min(6, { message: "Atleast 6 characters are requried" }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
