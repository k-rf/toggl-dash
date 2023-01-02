/*
  Warnings:

  - Added the required column `clientId` to the `TogglEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `TogglEntry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TogglEntry" ADD COLUMN     "clientId" INTEGER NOT NULL,
ADD COLUMN     "projectId" INTEGER NOT NULL;
