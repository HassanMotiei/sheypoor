import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import MoreAdsButton from "@/components/main/MoreAdsButton";
import Breadcrumbs from "@/components/main/Breadcrumbs";

const getAds = async () => {
	const res = await prisma.ads.findMany({
		select: {
			id: true,
			imgLogo: true,
			imgAds: true,
			favorite: true,
			group: true,
			title: true,
			price: true,
			city: true,
			time: true,
		},
	});
	return res;
};

export default async function Page() {
	const [adsData] = await Promise.all([getAds()]);

	const mainAdsData = await adsData.filter((ads) => ads.favorite);

	return (
		<div className="mt-32">
			<Breadcrumbs />
			{mainAdsData ? (
				<MoreAdsButton mainAdsData={mainAdsData} />
			) : (
				<p>No data found</p>
			)}
		</div>
	);
}
