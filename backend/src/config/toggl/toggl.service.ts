import { BadRequestException, Inject, Injectable, Scope } from "@nestjs/common";
import { Request } from "express";
import { z } from "zod";

@Injectable({ scope: Scope.REQUEST })
export class TogglService {
  readonly apiToken: string;

  constructor(@Inject("REQUEST") { req }: { req: Request }) {
    const result = z
      .object({
        cookies: z.object({
          "toggl-api-token": z.preprocess(
            (arg) => Buffer.from(arg as string, "base64").toString(),
            z.string().length(32)
          ),
        }),
      })
      .transform((arg) => arg.cookies["toggl-api-token"])
      .safeParse(req);

    if (result.success) {
      this.apiToken = result.data;
    } else {
      throw new BadRequestException();
    }
  }
}
