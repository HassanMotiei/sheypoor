"use client";
import React from "react";

import headerData from "@/app/headerData";

interface AdRegisterModalProps {
	selectedSubData: string | null;
	setSelectedSubData: React.Dispatch<React.SetStateAction<string | null>>;
}

const AdRegisterModal: React.FC<AdRegisterModalProps> = ({
	selectedSubData,
	setSelectedSubData,
}) => {
	const [selectedData, setSelectedData] = React.useState<{
		id: number;
		name: string;
		iconName: string;
		allGroup: string;
		title: string[];
	} | null>(null);

	const [isShowModalList, setIsShowModalList] = React.useState(false);
	const [isShowModalSubList, setIsShowModalSubList] = React.useState(false);
	const [colorWarning, setColorWarning] = React.useState("indigo-700");

	const modalRef = React.useRef<HTMLDialogElement>(null);

	const openModal = () => {
		if (modalRef.current) {
			modalRef.current.showModal();
		} // Set the selected data when opening the modal
		setIsShowModalList(true);
	};

	const openModalTitle = (data: {
		id: number;
		name: string;
		iconName: string;
		allGroup: string;
		title: string[];
	}) => {
		if (modalRef.current) {
			modalRef.current.showModal();
		}
		setSelectedData(data);
		setIsShowModalList(false);
		setIsShowModalSubList(true);
	};

	const openModalSubTitle = (subData: string) => {
		if (modalRef.current) {
			modalRef.current.close();
		}
		setSelectedSubData(subData);
		setSelectedData(null);
	};

	return (
		<div>
			<button
				className="btn-block flex flex-col gap-2 pb-2"
				onClick={() => openModal()} // Pass the data to openModal function
			>
				{!selectedSubData && <div className="mt-6">Category</div>}
				{selectedSubData && (
					<div className="flex flex-col gap-1">
						<div className="text-sm text-start">Category</div>
						<div>{selectedSubData}</div>
					</div>
				)}
			</button>
			{colorWarning === "indigo-700" ? (
				<div className="label border-t-indigo-700 border-t pt-2">
					<span className="label-text-alt text-indigo-700 text-xs">
						Enter a suitable category for your ad
					</span>
				</div>
			) : (
				<div className="label border-t-red-700 border-t pt-2">
					<span className="label-text-alt text-red-700 text-xs">
						Please complete this section
					</span>
				</div>
			)}
			<dialog ref={modalRef} className="modal">
				<div className="modal-box">
					<form method="dialog">
						<button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-2xl">
							✕
						</button>
						<div className="text-2xl font-extrabold">
							{/* Show the selected data's name */}
							Select category
						</div>
						<button className="modal-backdrop">Close</button>
					</form>
					<div className="flex flex-col max-h-96 overflow-y-auto border-t">
						{/* Render links */}
						<label className="input input-bordered flex items-center gap-2 mt-5">
							<input
								type="text"
								className="grow"
								placeholder="Search"
							/>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="w-4 h-4 opacity-70"
							>
								<path
									fillRule="evenodd"
									d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
									clipRule="evenodd"
								/>
							</svg>
						</label>
						{/* Render buttons for each headerData item */}
						{isShowModalList &&
							headerData.map((data) => (
								<button
									className="flex flex-col items-center gap-3"
									key={data.id}
									onClick={() => openModalTitle(data)} // Pass the data to openModal function
								>
									{data.name}
								</button>
							))}
						{isShowModalSubList &&
							selectedData &&
							selectedData.title &&
							selectedData.title.map((subData, index) => (
								<button
									className="flex flex-col items-center gap-3"
									key={index}
									onClick={() => openModalSubTitle(subData)} // Pass the data to openModal function
								>
									{subData}
								</button>
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

export default AdRegisterModal;

