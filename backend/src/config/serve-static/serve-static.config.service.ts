import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ServeStaticModuleOptions, ServeStaticModuleOptionsFactory } from "@nestjs/serve-static";

import { EnvVar } from "~/lib/env";

@Injectable()
export class ServeStaticConfigService implements ServeStaticModuleOptionsFactory {
  constructor(private readonly configService: ConfigService<EnvVar, true>) {}

  createLoggerOptions(): ServeStaticModuleOptions[] | Promise<ServeStaticModuleOptions[]> {
    return [
      {
        rootPath: this.get("STATIC_FILE_PATH"),
      },
    ];
  }

  private get<K extends keyof EnvVar>(key: K) {
    return this.configService.get(key, { infer: true });
  }
}
