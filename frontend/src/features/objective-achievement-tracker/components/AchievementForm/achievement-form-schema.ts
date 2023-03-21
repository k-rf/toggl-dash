import { z } from "zod";

export const achievementFormSchema = z
  .object({
    workday: z.preprocess(Number, z.number().int().min(0).max(31)),
    holiday: z.preprocess(Number, z.number().int().min(0).max(31)),
    offDay: z.preprocess(Number, z.number().int().min(0).max(31)),
    workdayHour: z.preprocess(Number, z.number().int().min(0).max(24)),
    holidayHour: z.preprocess(Number, z.number().int().min(0).max(24)),
    correlation: z.undefined(),
  })
  .superRefine(({ workday, holiday, offDay }, ctx) => {
    const addIssue = (path: string, message: string) => {
      ctx.addIssue({ code: "custom", path: [path], message });
    };

    if (31 < workday + holiday + offDay) {
      for (const path of ["workday", "holiday", "offDay", "correlation"]) {
        addIssue(path, "Over 31 days");
      }
    }

    if (workday + holiday + offDay < 28) {
      for (const path of ["workday", "holiday", "offDay", "correlation"]) {
        addIssue(path, "Under 28 days");
      }
    }
  });

export type AchievementFormSchema = z.infer<typeof achievementFormSchema>;
