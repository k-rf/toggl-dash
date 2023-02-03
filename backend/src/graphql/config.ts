import { join } from "path";

import { GenerateOptions } from "@nestjs/graphql";

export const config: GenerateOptions = {
  typePaths: ["./**/*.graphql"],
  path: join(process.cwd(), "src/graphql/graphql.ts"),
  enumsAsTypes: true,
  outputAs: "class",
  additionalHeader: "// @ts-nocheck",
};
