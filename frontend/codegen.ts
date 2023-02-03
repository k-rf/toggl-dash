import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "../backend/**/graphql/schema.graphql",
  documents: "src/**/*.graphql",
  generates: {
    "src/graphql/index.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"],
    },
  },
  config: {},
  watchConfig: {
    usePolling: true,
    interval: 1000,
  },
  hooks: {
    afterOneFileWrite: ["eslint --fix --cache --ext .tsx,.ts,.js", "prettier --write"],
  },
  ignoreNoDocuments: true,
};

export default config;
