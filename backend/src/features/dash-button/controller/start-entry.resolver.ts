import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import { Request } from "express";

import { StartEntryInput } from "./start-entry.input";

@Resolver()
export class StartEntryResolver {
  constructor() {}

  @Mutation()
  async startEntry(
    @Args("data") data: StartEntryInput,
    @Context({ transform: (ctx: { req: Request }) => ctx.req.headers.cookie })
    cookie: string
  ) {
    // TODO: Toggl タイマーを開始する処理を実装する
    console.log(data.description, cookie);
  }
}
