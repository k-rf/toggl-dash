/*
  Warnings:

  - Added the required column `kind` to the `AvailableTime` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AvailableTime" ADD COLUMN     "kind" TEXT;

UPDATE "AvailableTime" SET "kind" = 'weekday' WHERE "AvailableTime"."kind" IS NULL;

ALTER TABLE "AvailableTime" ALTER COLUMN     "kind" SET NOT NULL;
