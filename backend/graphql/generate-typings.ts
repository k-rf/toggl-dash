import { GraphQLDefinitionsFactory } from "@nestjs/graphql";

import { config } from "./config";

export const definitionsFactory = new GraphQLDefinitionsFactory();

definitionsFactory.generate(config);
