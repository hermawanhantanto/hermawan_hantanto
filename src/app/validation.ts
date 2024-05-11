import { z } from "zod";

export const formSchema = z.object({
    email: z.string().email(),
    subject: z.string().min(3),
    message: z.string().min(10),
  });