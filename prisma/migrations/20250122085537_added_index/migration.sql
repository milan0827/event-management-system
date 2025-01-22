/*
  Warnings:

  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - Added the required column `event_name` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `full_name` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "events" ADD COLUMN     "event_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "name",
ADD COLUMN     "full_name" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "events_event_name_idx" ON "events"("event_name");

-- CreateIndex
CREATE INDEX "users_full_name_idx" ON "users"("full_name");
