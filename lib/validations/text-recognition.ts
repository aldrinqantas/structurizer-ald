import * as z from "zod";

export const textRecognitionSchema = z.object({
  id: z.string(),
  text: z.string().trim().min(1, { message: "The text cannot be empty." }),
});
