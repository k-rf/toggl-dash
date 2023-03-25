import { z } from "zod";

export const objectiveFormSchema = z.object({
  objective: z.preprocess(Number, z.number().int().min(0)),
});

export type ObjectiveFormSchema = z.infer<typeof objectiveFormSchema>;
