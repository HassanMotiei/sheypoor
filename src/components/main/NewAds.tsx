"use client";
import React, { useState } from "react";
import CardAds from "./CardAds";
import adsData from "@/app/adsData";

const LastCourses = () => {
	const [numItemsToShow, setNumItemsToShow] = useState(20);
	const allItems = adsData;

	const itemsToShow = allItems.slice(0, numItemsToShow);

	return (
		<div className="mt-16">
			<div className="flex justify-between">
				<div>
					<p className="text-2xl">New ads</p>
				</div>
			</div>
			<div className="flex justify-between flex-wrap mt-5">
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
};

export default LastCourses;
