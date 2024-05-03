import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, { message: "Name too short" }),
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});
