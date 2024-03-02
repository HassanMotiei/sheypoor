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

export default async function Page({ params }: { params: { slug: string } }) {
	const [adsData] = await Promise.all([getAds()]);

	let mainAdsData = await adsData.find(
		(ads) =>
			ads.group &&
			ads.group
				.replace(/\s/g, "-")
				.replace(/\//g, "-")
				.replace(/,/g, "") === params.slug
	);

	return (
		<div className="mt-32">
			<Breadcrumbs />
			{mainAdsData ? (
				<MoreAdsButton mainAdsData={[mainAdsData]} />
			) : (
				<p>No data found</p>
			)}
		</div>
	);
}
