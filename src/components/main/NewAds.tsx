"use client";
import React, { useState } from "react";
import Link from "next/link";
import Card from "./Card";
import { ArrowRight } from "lucide-react";
import adsData from "@/app/adsData";

const LastCourses = () => {
	const [numItemsToShow, setNumItemsToShow] = useState(20);
	const allItems = adsData; // لیست کامل کارت های شما

	const itemsToShow = allItems.slice(0, numItemsToShow);

	return (
		<div className="mt-16">
			<div className="flex justify-between">
				<div>
					<p className="text-2xl">Last Courses</p>
					<p className="text-xl">Your platform towards success</p>
				</div>
				<Link href="/" className="text-l flex items-center">
					View allCourses <ArrowRight size={20} strokeWidth={1.5} />
				</Link>
			</div>
			<div className="flex justify-between flex-wrap mt-10">
				{itemsToShow.map((data) => (
					<Card key={data.id} {...data} />
				))}
			</div>
			<div className="flex justify-center m-10">
				<button
					className="btn btn-outline btn-wide btn-success"
					onClick={() => setNumItemsToShow(numItemsToShow + 20)}
				>
					More ads
				</button>
			</div>
		</div>
	);
};

export default LastCourses;
