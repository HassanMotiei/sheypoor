"use client";
import { Camera, Plus } from "lucide-react";
import React, { ChangeEvent } from "react";

interface ImageUploaderProps {
	images: string[];
	setImages: React.Dispatch<React.SetStateAction<string[]>>;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ images, setImages }) => {
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

	return (
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
						style={{ maxWidth: "120px", maxHeight: "120px" }}
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
	);
};

export default ImageUploader;
