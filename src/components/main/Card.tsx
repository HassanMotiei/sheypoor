import { DollarSign, Clock, NotebookTabs, Images, Heart } from "lucide-react";
import Link from "next/link";
import _ from "lodash";
import Image from "next/image";

interface adsDataType {
	id: string;
	imgAds: string;
	imgLogo: string;
	like: boolean;
	numberOfPhotos: number;
	title: string;
	price: number;
	city: string;
	time: string;
}

const Card = (props: adsDataType) => {
	const originalText = props.title;
	const maxLength = 100;

	const truncatedText = _.truncate(originalText, {
		length: maxLength,
		separator: " ",
	});
	return (
		<div className="card card-compact w-[13rem] bg-base-100 shadow-xl m-3">
			<figure>
				<Link href={`/courses/${props.id}`}>
					<img src={props.imgAds} alt={truncatedText} />
				</Link>
			</figure>
			<div className="absolute left-3 top-3 rounded-full">
				<Image
					src={props.imgLogo}
					width="30"
					height="30"
					alt="sheypoor-logo"
				/>
			</div>
			<div className="absolute right-3 top-3 rounded-full py-0.5 px-1.5">
				<label className="swap swap-rotate">
					{/* this hidden checkbox controls the state */}
					<input type="checkbox" />

					{/* Heart on icon */}
					<Heart
						className={props.like ? "swap-on" : "swap-off"}
						size={20}
					/>
					{/* Heart off icon */}
					<Heart
						className={props.like ? "swap-off" : "swap-on"}
						fill="red"
						size={20}
						strokeWidth={0.5}
					/>
				</label>
			</div>
			<div className="absolute right-3 top-32 rounded-full bg-gray-600 py-0.5 px-1.5">
				<p className="flex items-center gap-1">
					<Images size={16} />
					12
				</p>
			</div>
			<div className="flex flex-col card-body gap-4">
				<p>{truncatedText}</p>
				<p className="text-sm flex items-center">
					{props.price}
					<DollarSign size={20} />
				</p>
				<p className="text-sm flex items-center gap-1">
					<NotebookTabs size={20} />
					{props.city}
				</p>
				<p className="text-sm flex items-center gap-1">
					<Clock size={20} />
					{props.time}
				</p>
			</div>
		</div>
	);
};

export default Card;
