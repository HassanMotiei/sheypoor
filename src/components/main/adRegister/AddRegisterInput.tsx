"use client";
import React, { useEffect, useRef, useState } from "react";
import { Eraser } from "lucide-react";

// interface AddRegisterInputProps {
// 	inputValue: string;
// 	setInputValue: React.Dispatch<React.SetStateAction<string>>;
// 	showButton: boolean;
// 	setShowButton: React.Dispatch<React.SetStateAction<boolean>>;
// 	colorWarningInput: string;
// 	setColorWarningInput: React.Dispatch<React.SetStateAction<string>>;
// 	inputFocused: boolean;
// 	setInputFocused: React.Dispatch<React.SetStateAction<boolean>>;
// }

const AddRegisterInput: React.FC = ({}) => {
	const [inputValue, setInputValue] = useState("");
	const [showButton, setShowButton] = useState(true);
	const [colorWarningInput, setColorWarningInput] = useState("indigo-700");
	const [inputFocused, setInputFocused] = useState(false);

	const EmptyCategory = () => {
		setInputValue("");
		setShowButton(true);
		setColorWarningInput("indigo-700");
		setInputFocused(false);
	};

	const inputRef = useRef<HTMLInputElement>(null);

	const handleBlur = () => {
		if (inputValue.trim() === "") {
			setShowButton(true);
			setColorWarningInput("red-700");
		}
		setInputFocused(false);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
		if (e.target.value.trim() !== "") {
			setColorWarningInput("indigo-700");
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
							className={`label-text text-sm text-${colorWarningInput}`}
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
				{colorWarningInput === "indigo-700" ? (
					<div className="label border-t-indigo-700 border-t pt-2">
						<span className="label-text-alt text-indigo-700 text-xs">
							Enter a suitable title for your ad
						</span>
						<button
							className="btn btn-ghost text-xs btn-sm label-text-alt"
							onClick={EmptyCategory}
						>
							<Eraser size={16} strokeWidth={2} color="#4338ca" />
						</button>
					</div>
				) : (
					<div className="label border-t-red-700 border-t pt-2">
						<span className="label-text-alt text-red-700 text-xs">
							Please complete this section
						</span>
						<button
							className="btn btn-ghost text-xs btn-sm label-text-alt"
							onClick={EmptyCategory}
						>
							<Eraser size={16} strokeWidth={2} color="#b91c1c" />
						</button>
					</div>
				)}
			</label>
		</div>
	);
};

export default AddRegisterInput;
