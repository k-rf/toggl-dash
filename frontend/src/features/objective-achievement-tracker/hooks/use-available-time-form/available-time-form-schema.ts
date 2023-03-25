import { z } from "zod";

export const availableTimeFormSchema = z
  .object({
    weekday: z.preprocess(Number, z.number().int().min(0).max(31)),
    holiday: z.preprocess(Number, z.number().int().min(0).max(31)),
    offDay: z.preprocess(Number, z.number().int().min(0).max(31)),
    weekdayHour: z.preprocess(Number, z.number().int().min(0).max(24)),
    holidayHour: z.preprocess(Number, z.number().int().min(0).max(24)),
    correlation: z.undefined(),
  })
  .superRefine(({ weekday, holiday, offDay }, ctx) => {
    const addIssue = (path: string, message: string) => {
      ctx.addIssue({ code: "custom", path: [path], message });
    };

    if (31 < weekday + holiday + offDay) {
      for (const path of ["weekday", "holiday", "offDay", "correlation"]) {
        addIssue(path, "Over 31 days");
      }
    }

    if (weekday + holiday + offDay < 28) {
      for (const path of ["weekday", "holiday", "offDay", "correlation"]) {
        addIssue(path, "Under 28 days");
      }
    }
  });

export type AvailableTimeFormSchema = z.infer<typeof availableTimeFormSchema>;
