import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
  Scope,
} from "@nestjs/common";
import { AxiosError } from "axios";
import { Request } from "express";
import { z } from "zod";

import { axios } from "~/lib/axios";

import { PrismaService } from "../database/prisma.service";

type StartProps = { clientId: number; projectId: number; description: string; start: Date };

@Injectable({ scope: Scope.REQUEST })
export class TogglService {
  private readonly logger = new Logger("TogglService");

  private readonly auth: {
    readonly password: string;
    readonly username: string;
  };
  private readonly workspaceId: number;

  constructor(
    @Inject("REQUEST") { req }: { req: Request },
    private readonly prismaService: PrismaService
  ) {
    const result = z
      .object({
        cookies: z.object({
          "toggl-api-token": z.preprocess(
            (arg) => Buffer.from(String(arg), "base64").toString(),
            z.string().length(32)
          ),
          "toggl-workspace-id": z
            .preprocess(
              (arg) => Buffer.from(String(arg), "base64").toString(),
              z.string().length(7)
            )
            .transform(Number),
        }),
      })
      .transform((arg) => arg.cookies)
      .safeParse(req);

    if (result.success) {
      this.auth = {
        password: "api_token",
        username: result.data["toggl-api-token"],
      };
      this.workspaceId = result.data["toggl-workspace-id"];
    } else {
      this.logger.error(
        result.error.issues.map((e) => `${e.path.at(-1)}: ${e.message}.`).join("\n")
      );

      throw new BadRequestException();
    }
  }

  private async togglApiUrl() {
    return (
      (await this.prismaService.togglConfig.findUnique({ where: { key: "toggl_api_url" } }))
        ?.value ??
      (() => {
        throw new InternalServerErrorException();
      })()
    );
  }

  async start(props: StartProps) {
    const url = `https://${await this.togglApiUrl()}/workspaces/${this.workspaceId}/time_entries`;

    try {
      const result = await axios.post(
        url,
        {
          client_id: props.clientId,
          project_id: props.projectId,
          description: props.description,
          start: props.start.toISOString(),
          workspace_id: this.workspaceId,
          created_with: "toggl-dash",
          duration: -(props.start.valueOf() / 1000).toFixed(0), // NOTE: Toggl API の仕様 Time entry duration. For running entries should be -1 * (Unix start time)
        },
        { auth: this.auth, headers: { "Content-type": "application/json" } }
      );

      this.logger.debug(result.data);
      this.logger.log("Toggl Entry is started.");
    } catch (e) {
      if (e instanceof AxiosError) this.logger.error(e.response?.data);
      else this.logger.error(e);

      throw new InternalServerErrorException();
    }
  }

  async findAllClient() {
    const url = `https://${await this.togglApiUrl()}/workspaces/${this.workspaceId}/clients`;

    try {
      const result = await axios.get<{ id: number; name: string }[]>(url, {
        auth: this.auth,
        headers: { "Content-type": "application/json" },
      });

      this.logger.debug(result.data);
      this.logger.log("Success to get Toggl Clients.");

      return result.data;
    } catch (e) {
      if (e instanceof AxiosError) this.logger.error(e.response?.data);
      else this.logger.error(e);

      throw new InternalServerErrorException();
    }
  }
}
