import { z } from "zod";

const schema = z.object({
  STATIC_FILE_PATH: z.string().min(1),
});

export type EnvVar = z.infer<typeof schema>;

export const validate = (config: Record<string, string | number>) => {
  return schema.parse(config);
};
