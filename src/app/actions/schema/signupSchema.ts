import { z } from "zod";

export const SignupSchema = z.object({
  full_name: z.string().min(2, { message: "Atleast 1 character is required" }),
  email: z.string().min(2, { message: "Atleast 1 character is required" }),
  password: z.string().min(6, { message: "Atleast 6 characters are requried" }),
  // photo: z
  //   .custom<File>((file) => file instanceof File, {
  //     message: "",
  //   })
  //   .refine((file) => {
  //     return [
  //       "image/png",
  //       "image/jpeg",
  //       "image/gif",
  //       "image/webp",
  //       "image/jpg",
  //     ].includes(file.type);
  //   }, "File must be png, jpg, jpeg or webp")
  //   .optional(),
});

export type SignupSType = z.infer<typeof SignupSchema>;
