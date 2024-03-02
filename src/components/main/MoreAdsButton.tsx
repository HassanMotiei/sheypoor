"use client";
import React, { useState, useEffect } from "react";
import CardAds from "@/components/main/CardAds";

interface adsDataType {
	id: number;
	imgLogo: string;
	imgAds: string[];
	favorite: boolean;
	group: string;
	title: string;
	price: number;
	city: string;
	time: string;
}

export default function Page({ mainAdsData }: { mainAdsData: adsDataType[] }) {
	const [allItems, setAllItems] = useState<
		{
			id: number;
			imgLogo: string;
			imgAds: string[];
			favorite: boolean;
			group: string;
			title: string;
			price: number;
			city: string;
			time: string;
		}[]
	>([]);

	const [numItemsToShow, setNumItemsToShow] = useState(20);

	useEffect(() => {
		if (mainAdsData) {
			setAllItems(mainAdsData);
		} else {
			setAllItems([]);
		}
	}, [mainAdsData]);

	const itemsToShow = allItems ? allItems.slice(0, numItemsToShow) : [];

	return (
		<div>
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
