"use client";
import React, { useState } from "react";
import AdRegisterModal from "@/components/main/AdRegisterModal";
import AddRegisterInput from "@/components/main/AddRegisterInput";
import FileInput from "@/components/main/FileInput";

const AdRegister = () => {
	const [images, setImages] = useState<string[]>([]);
	const [selectedSubData, setSelectedSubData] = useState<string | null>(null);
	const [inputValue, setInputValue] = useState("");
	const [showButton, setShowButton] = useState(true);
	const [colorWarning, setColorWarning] = useState("indigo-700");
	const [inputFocused, setInputFocused] = useState(false);

	const EmptyCategory = () => {
		setImages([]);
		setSelectedSubData(null);
		setInputValue("");
		setShowButton(true);
		setColorWarning("indigo-700");
		setInputFocused(false);
	};

	return (
		<div className="mt-32">
			<div className="flex justify-between">
				<div className="text-xl font-bold">
					Advertisement registration
				</div>
				<div>
					<button className="btn text-base" onClick={EmptyCategory}>
						Clear the form
					</button>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-10 mt-12 max-w-screen-xl">
				<div className="flex flex-col gap-3 text-start">
					<div className="block">
						<AdRegisterModal
							selectedSubData={selectedSubData}
							setSelectedSubData={setSelectedSubData}
						/>
					</div>
					<div>
						<AddRegisterInput
							inputValue={inputValue}
							setInputValue={setInputValue}
							showButton={showButton}
							setShowButton={setShowButton}
							colorWarning={colorWarning}
							setColorWarning={setColorWarning}
							inputFocused={inputFocused}
							setInputFocused={setInputFocused}
						/>
					</div>
				</div>
				<div className="flex flex-col gap-8 text-start">
					<div className="text-xl text-bold">Select photo</div>
					<div>
						A picture is better than a thousand words. By placing a
						photo, increase the chance of your ad being seen 5 times
					</div>
					<div>
						<FileInput images={images} setImages={setImages} />
					</div>
					<div className="border-t pt-5">
						By registering an ad in Sheypoor, you accept its terms
						and conditions
					</div>
					<div>
						<button className="btn btn-primary">
							Advertisement registration
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdRegister;
