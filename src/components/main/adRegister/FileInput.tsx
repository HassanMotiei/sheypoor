"use client";
import { Camera, Eraser, Plus } from "lucide-react";
import React, { ChangeEvent, useState } from "react";

const ImageUploader: React.FC = () => {
	const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target?.files;
		if (files && files.length > 0) {
			const file = files[0];
			const reader = new FileReader();
			reader.onload = () => {
				const result = reader.result as string;
				setImages((prevImages) => [...prevImages, result]);
			};
			reader.readAsDataURL(file);
		}
	};

	const [images, setImages] = useState<string[]>([]);

	const EmptyCategory = () => {
		setImages([]);
	};

	return (
		<>
			<div className="flex flex-col gap-8 text-start">
				<div className="flex justify-between">
					<div className="text-xl text-bold">Select photo</div>
					<div>
						<button
							className="btn text-base"
							onClick={EmptyCategory}
						>
							<Eraser
								size={20}
								strokeWidth={1.5}
								color="#4338ca"
							/>
						</button>
					</div>
				</div>
				<div>
					A picture is better than a thousand words. By placing a
					photo, increase the chance of your ad being seen 5 times
				</div>
				<div className="grid grid-cols-4 gap-4">
					{images.length !== 0 ? (
						<label
							htmlFor="image-upload"
							className="flex flex-col gap-2 btn btn-ghost hover:bg-transparent w-32 h-32 outline-dashed outline-2 outline-offset-2"
						>
							<Plus />
							Add Image
						</label>
					) : (
						<>
							<label
								htmlFor="image-upload"
								className="flex flex-col gap-2 btn btn-ghost hover:bg-transparent w-32 h-32 outline-dashed outline-2 outline-offset-2"
							>
								<Plus />
								Add Image
							</label>
							<label
								htmlFor="image-upload"
								className="flex flex-col gap-2 btn btn-ghost hover:bg-transparent w-32 h-32 outline-dashed outline-2 outline-offset-2 outline-gray-500"
							>
								<Camera color="#6b7280" />
							</label>
							<label
								htmlFor="image-upload"
								className="flex flex-col gap-2 btn btn-ghost hover:bg-transparent w-32 h-32 outline-dashed outline-2 outline-offset-2 outline-gray-500"
							>
								<Camera color="#6b7280" />
							</label>
							<label
								htmlFor="image-upload"
								className="flex flex-col gap-2 btn btn-ghost hover:bg-transparent w-32 h-32 outline-dashed outline-2 outline-offset-2 outline-gray-500"
							>
								<Camera color="#6b7280" />
							</label>
						</>
					)}
					{images.map((image, index) => (
						<label
							key={index}
							htmlFor={`image-upload-${index}`}
							className="btn btn-ghost hover:bg-transparent w-32 h-32 outline outline-1 outline-offset-2 pointer-events-none"
						>
							<img
								src={image}
								alt="Uploaded"
								style={{
									maxWidth: "120px",
									maxHeight: "120px",
								}}
							/>
						</label>
					))}
					<input
						id="image-upload"
						type="file"
						accept="image/*"
						onChange={handleImageChange}
						style={{ display: "none" }}
					/>
				</div>
				<div className="border-t pt-5">
					By registering an ad in Sheypoor, you accept its terms and
					conditions
				</div>
			</div>
		</>
	);
};

export default ImageUploader;
