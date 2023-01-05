/*
  Warnings:

  - You are about to drop the column `client` on the `TogglEntry` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `TogglEntry` table. All the data in the column will be lost.
  - You are about to drop the column `project` on the `TogglEntry` table. All the data in the column will be lost.
  - You are about to drop the column `projectId` on the `TogglEntry` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[togglClientId,togglProjectId,description]` on the table `TogglEntry` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `togglClientId` to the `TogglEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `togglProjectId` to the `TogglEntry` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "TogglEntry_client_project_description_key";

-- AlterTable
ALTER TABLE "TogglEntry" DROP COLUMN "client",
DROP COLUMN "clientId",
DROP COLUMN "project",
DROP COLUMN "projectId",
ADD COLUMN     "togglClientId" INTEGER NOT NULL,
ADD COLUMN     "togglProjectId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "TogglClient" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TogglClient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TogglProject" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TogglProject_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TogglEntry_togglClientId_togglProjectId_description_key" ON "TogglEntry"("togglClientId", "togglProjectId", "description");

-- AddForeignKey
ALTER TABLE "TogglEntry" ADD CONSTRAINT "TogglEntry_togglClientId_fkey" FOREIGN KEY ("togglClientId") REFERENCES "TogglClient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TogglEntry" ADD CONSTRAINT "TogglEntry_togglProjectId_fkey" FOREIGN KEY ("togglProjectId") REFERENCES "TogglProject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
