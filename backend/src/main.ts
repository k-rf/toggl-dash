import { LogLevel } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import cookieParser from "cookie-parser";
import { match } from "ts-pattern";

import { AppModule } from "./app.module";
import { PrismaService } from "./config/database/prisma.service";

const LOG_LEVEL: LogLevel[] = match<string | undefined, LogLevel[]>(process.env.NODE_ENV)
  .with("production", () => ["error", "warn", "log"])
  .otherwise(() => ["error", "warn", "log", "verbose", "debug"]);

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: LOG_LEVEL,
  });

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  app.setGlobalPrefix("api");

  app.use(cookieParser());

  await app.listen(3000);
}
bootstrap();
