import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";

import { DatabaseModule } from "./config/database/database.module";
import { ServeStaticConfigService } from "./config/serve-static/serve-static.config.service";
import { validate } from "./lib/env";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
    }),
    ServeStaticModule.forRootAsync({ useClass: ServeStaticConfigService }),
    DatabaseModule,
  ],
})
export class AppModule {}
