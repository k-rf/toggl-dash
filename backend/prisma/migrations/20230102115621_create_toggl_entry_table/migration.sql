/*
  Warnings:

  - You are about to drop the column `summary` on the `DashButton` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[togglEntryId]` on the table `DashButton` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `togglEntryId` to the `DashButton` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DashButton" DROP COLUMN "summary",
ADD COLUMN     "togglEntryId" UUID NOT NULL;

-- CreateTable
CREATE TABLE "TogglEntry" (
    "id" UUID NOT NULL,
    "client" TEXT NOT NULL,
    "project" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "TogglEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TogglEntry_client_project_description_key" ON "TogglEntry"("client", "project", "description");

-- CreateIndex
CREATE UNIQUE INDEX "DashButton_togglEntryId_key" ON "DashButton"("togglEntryId");

-- AddForeignKey
ALTER TABLE "DashButton" ADD CONSTRAINT "DashButton_togglEntryId_fkey" FOREIGN KEY ("togglEntryId") REFERENCES "TogglEntry"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
