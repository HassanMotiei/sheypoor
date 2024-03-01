/*
  Warnings:

  - The `favorite` column on the `Ads` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Ads" DROP COLUMN "favorite",
ADD COLUMN     "favorite" BOOLEAN;
