import { z } from "zod";

export const enrollNowSchema = z.object({
  phone_number: z.string(),
  parent_name: z.string().min(1),
  academic_level: z.string(),
});

export type EnrollNowSchema = z.infer<typeof enrollNowSchema>;
