/*
  Warnings:

  - You are about to drop the column `imgAdsId` on the `Ads` table. All the data in the column will be lost.
  - You are about to drop the `ImgAds` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ads" DROP CONSTRAINT "Ads_imgAdsId_fkey";

-- AlterTable
ALTER TABLE "Ads" DROP COLUMN "imgAdsId";

-- DropTable
DROP TABLE "ImgAds";

-- CreateTable
CREATE TABLE "ImageCollection" (
    "id" SERIAL NOT NULL,
    "images" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ImageCollection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImageCollectionToAds" (
    "id" SERIAL NOT NULL,
    "imageCollectionId" INTEGER NOT NULL,
    "adId" INTEGER NOT NULL,

    CONSTRAINT "ImageCollectionToAds_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ImageCollectionToAds" ADD CONSTRAINT "ImageCollectionToAds_imageCollectionId_fkey" FOREIGN KEY ("imageCollectionId") REFERENCES "ImageCollection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImageCollectionToAds" ADD CONSTRAINT "ImageCollectionToAds_adId_fkey" FOREIGN KEY ("adId") REFERENCES "Ads"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
