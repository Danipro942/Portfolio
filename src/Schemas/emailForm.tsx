import { z } from "zod";

export const EmailFormSchema = z.object({
  email: z
    .string()
    .email()
    .min(4, "The field need to have 4 character at least")
    .max(50, "The Email is too long"),

  name: z
    .string()
    .min(3, "The field need to have 3 character at least")
    .max(30, "The name is too long"),

  subject: z
    .string()
    .min(3, "The field need to have 3 character at least")
    .max(50, "The subject is too long"),

  message: z
    .string()
    .min(3, "The field need to have 3 character at least")
    .max(100, "The message is too long"),
});

export type EmailForm = z.infer<typeof EmailFormSchema>;
