import { Module } from "@nestjs/common";

import { DatabaseModule } from "./lib/database/database.module";

@Module({
  imports: [DatabaseModule],
})
export class AppModule {}
