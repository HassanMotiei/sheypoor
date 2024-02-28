"use client";
import React, { useState, useEffect, useRef } from "react";

interface AddRegisterInputProps {
	inputValue: string;
	setInputValue: React.Dispatch<React.SetStateAction<string>>;
	showButton: boolean;
	setShowButton: React.Dispatch<React.SetStateAction<boolean>>;
	colorWarning: string;
	setColorWarning: React.Dispatch<React.SetStateAction<string>>;
	inputFocused: boolean;
	setInputFocused: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddRegisterInput: React.FC<AddRegisterInputProps> = ({
	inputValue,
	setInputValue,
	showButton,
	setShowButton,
	colorWarning,
	setColorWarning,
	inputFocused,
	setInputFocused,
}) => {
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
						<span
							className={`label-text text-sm text-${colorWarning}`}
						>
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
						<span className="label-text-alt text-indigo-700 text-xs">
							Enter a suitable title for your ad
						</span>
					</div>
				) : (
					<div className="label border-t-red-700 border-t pt-2">
						<span className="label-text-alt text-red-700 text-xs">
							Please complete this section
						</span>
					</div>
				)}
			</label>
		</div>
	);
};

export default AddRegisterInput;
