import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { GraphQLModule } from "@nestjs/graphql";
import { ServeStaticModule } from "@nestjs/serve-static";

import { DatabaseModule } from "./config/database/database.module";
import { ServeStaticConfigService } from "./config/serve-static/serve-static.config.service";
import { TogglModule } from "./config/toggl/toggl.module";
import { DashButtonModule } from "./features/dash-button/dash-button.module";
import { ObjectiveAchievementTrackerModule } from "./features/objective-achievement-tracker/objective-achievement-tracker.module";
import { OutputInterceptor } from "./interceptor/output.interceptor";
import { validate } from "./lib/env";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ["./**/*.graphql"],
      cache: "bounded",
    }),
    ServeStaticModule.forRootAsync({ useClass: ServeStaticConfigService }),
    DatabaseModule,
    TogglModule,
    DashButtonModule,
    ObjectiveAchievementTrackerModule,
  ],
  providers: [{ provide: APP_INTERCEPTOR, useClass: OutputInterceptor }],
})
export class AppModule {}
