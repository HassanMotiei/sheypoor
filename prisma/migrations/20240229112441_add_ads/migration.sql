-- CreateTable
CREATE TABLE "Ads" (
    "id" SERIAL NOT NULL,
    "imgLogo" TEXT NOT NULL,
    "favorite" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "city" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "imgAdsId" INTEGER NOT NULL,

    CONSTRAINT "Ads_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImgAds" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,

    CONSTRAINT "ImgAds_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Ads" ADD CONSTRAINT "Ads_imgAdsId_fkey" FOREIGN KEY ("imgAdsId") REFERENCES "ImgAds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
