/*
  Warnings:

  - You are about to drop the `ImageCollection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ImageCollectionToAds` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ImageCollectionToAds" DROP CONSTRAINT "ImageCollectionToAds_adId_fkey";

-- DropForeignKey
ALTER TABLE "ImageCollectionToAds" DROP CONSTRAINT "ImageCollectionToAds_imageCollectionId_fkey";

-- AlterTable
ALTER TABLE "Ads" ADD COLUMN     "imgAds" TEXT[];

-- DropTable
DROP TABLE "ImageCollection";

-- DropTable
DROP TABLE "ImageCollectionToAds";
