"use client";
import React, { useState, useEffect, useRef } from "react";

const AddRegisterInput = () => {
	const [showButton, setShowButton] = useState(true);
	const [inputValue, setInputValue] = useState("");
	const [colorWarning, setColorWarning] = useState("indigo-700");
	const [inputFocused, setInputFocused] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	const handleBlur = () => {
		if (inputValue.trim() === "") {
			setShowButton(true);
			setColorWarning("red-700");
		}
		setInputFocused(false);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
		if (e.target.value.trim() !== "") {
			setColorWarning("indigo-700");
		}
	};

	const handleButtonClick = () => {
		setShowButton(false);
		setInputFocused(true); // Update input focus state
	};

	useEffect(() => {
		if (inputFocused && inputRef.current) {
			inputRef.current.focus();
		}
	}, [inputFocused]);

	return (
		<div>
			{showButton && (
				<button
					className="btn-block text-start pb-2 mt-9"
					onClick={handleButtonClick}
				>
					Ad title
				</button>
			)}

			<label className="form-control w-full max-w-xl">
				{!showButton && (
					<div className="label py-0">
						<span className={`label-text text-${colorWarning}`}>
							Ad title
						</span>
					</div>
				)}
				{!showButton && (
					<input
						ref={inputRef}
						type="text"
						className="input input-ghost w-full max-w-xl focus:outline-none border-none text-lg"
						onBlur={handleBlur}
						onChange={handleChange}
					/>
				)}
				{colorWarning === "indigo-700" ? (
					<div className="label border-t-indigo-700 border-t pt-2">
						<span className="label-text-alt text-indigo-700">
							Enter a suitable title for your ad
						</span>
					</div>
				) : (
					<div
						className="label border-t-red-700 border-t pt-2"
					>
						<span className="label-text-alt text-red-700">
							Please complete this section
						</span>
					</div>
				)}
			</label>
		</div>
	);
};

export default AddRegisterInput;
