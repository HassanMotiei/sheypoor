"use client";
import React from "react";
import {
	Armchair,
	Briefcase,
	Computer,
	KanbanSquare,
	Monitor,
	Shirt,
	TabletSmartphone,
	Umbrella,
	Home,
	CarFront,
} from "lucide-react";

import headerData from "@/app/headerData";
import Link from "next/link";

const ModalAds = () => {
	const [selectedData, setSelectedData] = React.useState<{
		id: number;
		name: string;
		iconName: string;
		allGroup: string;
		title: string[];
	} | null>(null);
	const modalRef = React.useRef<HTMLDialogElement>(null);

	const getIconComponent = (name: string) => {
		switch (name) {
			case "Armchair":
				return <Armchair size={40} strokeWidth={1} />;
			case "Briefcase":
				return <Briefcase size={40} strokeWidth={1} />;
			case "Computer":
				return <Computer size={40} strokeWidth={1} />;
			case "KanbanSquare":
				return <KanbanSquare size={40} strokeWidth={1} />;
			case "Monitor":
				return <Monitor size={40} strokeWidth={1} />;
			case "Shirt":
				return <Shirt size={40} strokeWidth={1} />;
			case "TabletSmartphone":
				return <TabletSmartphone size={40} strokeWidth={1} />;
			case "Umbrella":
				return <Umbrella size={40} strokeWidth={1} />;
			case "Home":
				return <Home size={40} strokeWidth={1} />;
			case "CarFront":
				return <CarFront size={40} strokeWidth={1} />;
			default:
				return null;
		}
	};

	const openModal = (data: {
		id: number;
		name: string;
		iconName: string;
		allGroup: string;
		title: string[];
	}) => {
		if (modalRef.current) {
			modalRef.current.showModal();
		}
		setSelectedData(data); // Set the selected data when opening the modal
	};

	return (
		<div>
			<div className="flex justify-evenly items-center mt-8">
				{/* Render buttons for each headerData item */}
				{headerData.map((data) => (
					<button
						className="flex flex-col items-center gap-3"
						key={data.id}
						onClick={() => openModal(data)} // Pass the data to openModal function
					>
						<div className="bg-ghost p-3">
							{getIconComponent(data.iconName)}
						</div>
						{data.name}
					</button>
				))}
			</div>
			<dialog ref={modalRef} className="modal">
				<div className="modal-box">
					<form method="dialog">
						<button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-2xl">
							✕
						</button>
						<div className="text-2xl font-extrabold">
							{/* Show the selected data's name */}
							{selectedData && selectedData.name}
						</div>
						<button className="modal-backdrop">Close</button>
					</form>
					<div className="flex flex-col max-h-96 overflow-y-auto border-t">
						{/* Render links */}
						<Link
							href="/"
							className="border-b py-5 text-xl font-bold"
						>
							{selectedData && selectedData.allGroup}
						</Link>
						{selectedData &&
							selectedData.title &&
							selectedData.title.map((data, index) => (
								<Link
									href={`/adsTitle/${data
										.replace(/\s/g, "-")
										.replace(/\//g, "-")}`}
									key={index}
									className="border-b py-5 text-xl"
								>
									{data}
								</Link>
							))}
					</div>
				</div>
				<form method="dialog" className="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</div>
	);
};

export default ModalAds;
