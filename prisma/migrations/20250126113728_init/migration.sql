-- CreateEnum
CREATE TYPE "EventStatus" AS ENUM ('ONGOING', 'UPCOMING', 'FINISHED');

-- AlterTable
ALTER TABLE "events" ADD COLUMN     "status" "EventStatus" NOT NULL DEFAULT 'UPCOMING';
