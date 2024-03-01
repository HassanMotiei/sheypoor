"use client";
import React, { useState, useEffect } from "react";
import CardAds from "@/components/main/CardAds";
import adsData from "@/app/adsData";
import Breadcrumbs from "@/components/main/Breadcrumbs";

export default function Page() {
	const [allItems, setAllItems] = useState<
		| {
				id: string;
				imgAds: string[];
				imgLogo: string;
				favorite: boolean;
				group: string;
				title: string;
				price: number;
				city: string;
				time: string;
		  }[]
		| undefined
	>(undefined);

	const [numItemsToShow, setNumItemsToShow] = useState(20);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const mainAdsData = await adsData.filter((ads) => ads.favorite);

				if (mainAdsData) {
					setAllItems(mainAdsData);
				} else {
					setAllItems(undefined);
				}
			} catch (error) {
				console.error("Error fetching data:", error);
				setAllItems(undefined);
			}
		};

		fetchData();
	}, []);

	const itemsToShow = allItems ? allItems.slice(0, numItemsToShow) : [];
	console.log(itemsToShow);

	return (
		<div className="mt-32">
			<Breadcrumbs />
			<div className="grid grid-cols-5 gap-4 mt-5">
				{itemsToShow.map((data) => (
					<CardAds key={data.id} {...data} />
				))}
			</div>
			<div className="flex justify-center m-10">
				<button
					className="btn btn-outline btn-wide"
					onClick={() => setNumItemsToShow(numItemsToShow + 20)}
				>
					More ads
				</button>
			</div>
		</div>
	);
}
