import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import Breadcrumbs from "@/components/main/Breadcrumbs";
import SwiperCarousel from "@/components/main/SwiperCarousel";
import { DollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
			ads.title &&
			ads.title
				.replace(/\s/g, "-")
				.replace(/\//g, "-")
				.replace(/,/g, "") === params.slug
	);

	// let hasAds = await adsData.some((ads) => ads.id === params.slug);

	const numberWithCommas = (number: number) => {
		return number.toLocaleString();
	};

	if (mainAdsData) {
		return (
			<div className="mt-32">
				<Breadcrumbs />
				<SwiperCarousel {...mainAdsData} />
				<div className="grid grid-cols-3 gap-10 mt-12 max-w-screen-xl mx-auto">
					<div className="text-start col-span-2">
						<div className="flex justify-between border-b pb-3">
							<div className="flex flex-col gap-3">
								<p className="text-lg font-bold">
									{mainAdsData.title}
								</p>
								<p className="text-lg flex items-center">
									{numberWithCommas(mainAdsData.price)}
									<DollarSign size={20} />
								</p>
							</div>
							<div>hours ago</div>
						</div>
						<div className="border-b">
							<div className="grid grid-rows-4 grid-flow-col gap-10 m-5">
								<div className="flex justify-between">
									<p>Meterage</p>
									<p>100 m2</p>
								</div>
								<div className="flex justify-between">
									<p>Property Type</p>
									<p>Apartment</p>
								</div>
								<div className="flex justify-between">
									<p>Number of rooms</p>
									<p>3</p>
								</div>
								<div className="flex justify-between">
									<p>Parking</p>
									<p>Yes</p>
								</div>
								<div className="flex justify-between">
									<p>Warehouse</p>
									<p>Yes</p>
								</div>
								<div className="flex justify-between">
									<p>Elevator</p>
									<p>Yes</p>
								</div>
								<div className="flex justify-between">
									<p>Old age</p>
									<p>2 years</p>
								</div>
								<div className="flex justify-between">
									<p>Price per meter</p>
									<p>100,000</p>
								</div>
							</div>
						</div>
						<div className="border-b">
							<div className="grid grid-rows-4 grid-flow-col gap-10 m-5">
								<div>01</div>
								<div>01</div>
								<div>01</div>
								<div>01</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-5 rounded-lg border text-start h-fit p-5">
						<div className="flex justify-center text-lg font-bold">
							<Image
								src={mainAdsData.imgLogo}
								width="100"
								height="100"
								alt="sheypoor-logo"
							/>
						</div>
						<Link
							href="/"
							className="flex justify-center text-lg font-bold"
						>
							Sadaf Fardis property
						</Link>
						<p className="flex justify-center text-sm font-bold  mb-10">
							Trump member since March 2022
						</p>
						<div className="flex justify-center">
							<button className="text-lg font-bold btn">
								Call 0919XXX9132
							</button>
						</div>
						<div className="flex justify-center">
							<button className="flex justify-center text-lg font-bold btn">
								Chat with Real Estate
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	} else {
		return <div>No data found</div>;
	}
}
