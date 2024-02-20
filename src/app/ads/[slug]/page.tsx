import adsData from "@/app/adsData";
import Breadcrumbs from "@/components/main/Breadcrumbs"
import SwiperCarousel from "@/components/main/SwiperCarousel";

export default async function Page({ params }: { params: { slug: string } }) {
	let mainAdsData = await adsData.find(
		(ads) =>
			ads.title.replace(/\s/g, "-").replace(/\//g, "-") === params.slug
	);

	// let hasAds = await adsData.some((ads) => ads.id === params.slug);

	if (mainAdsData) {
		return (
			<div className="mt-10">
				<Breadcrumbs />
				<SwiperCarousel />
				{mainAdsData.title}
			</div>
		);
	} else {
		return <div>No data found</div>;
	}
}
