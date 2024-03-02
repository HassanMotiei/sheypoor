/*
  Warnings:

  - Made the column `imgLogo` on table `Ads` required. This step will fail if there are existing NULL values in that column.
  - Made the column `group` on table `Ads` required. This step will fail if there are existing NULL values in that column.
  - Made the column `title` on table `Ads` required. This step will fail if there are existing NULL values in that column.
  - Made the column `price` on table `Ads` required. This step will fail if there are existing NULL values in that column.
  - Made the column `city` on table `Ads` required. This step will fail if there are existing NULL values in that column.
  - Made the column `time` on table `Ads` required. This step will fail if there are existing NULL values in that column.
  - Made the column `favorite` on table `Ads` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Ads" ALTER COLUMN "imgLogo" SET NOT NULL,
ALTER COLUMN "group" SET NOT NULL,
ALTER COLUMN "title" SET NOT NULL,
ALTER COLUMN "price" SET NOT NULL,
ALTER COLUMN "city" SET NOT NULL,
ALTER COLUMN "time" SET NOT NULL,
ALTER COLUMN "favorite" SET NOT NULL;
