/*
  Warnings:

  - Added the required column `email` to the `Info` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Info` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Info"
ADD COLUMN "email" TEXT NOT NULL DEFAULT '-',
ADD COLUMN "phone" TEXT NOT NULL DEFAULT '-';
