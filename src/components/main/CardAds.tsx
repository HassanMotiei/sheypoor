import { DollarSign, Clock, NotebookTabs, Images, Heart } from "lucide-react";
import Link from "next/link";
import _ from "lodash";
import Image from "next/image";

interface adsDataType {
	id: number;
	imgLogo: string;
	imgAds: string[];
	favorite: boolean;
	group: string;
	title: string;
	price: number;
	city: string;
	time: string;
}

const CardAds = (props: adsDataType) => {
	const originalTextTitle = props.title;
	const originalTextGroup = props.group;

	const maxLengthTitle = 50;
	const maxLengthGroup = 20;

	const truncatedTextTitle = _.truncate(originalTextTitle, {
		length: maxLengthTitle,
		separator: " ",
	});
	const truncatedTextGroup = _.truncate(originalTextGroup, {
		length: maxLengthGroup,
		separator: " ",
	});

	return (
		<div className="card card-compact w-[13rem] bg-base-100 shadow-xl m-3">
			<figure>
				<Link
					href={`/ads/${props.title
						.replace(/\s/g, "-")
						.replace(/\//g, "-")
						.replace(/,/g, "")}`}
				>
					<div className="w-56 h-56 relative overflow-hidden">
						<Image
							src={props.imgAds[0]}
							alt="sheypoor-ads"
							layout="fill"
							objectFit="cover"
						/>
					</div>
				</Link>
			</figure>
			<div className="absolute left-2 top-2">
				<Image
					src={props.imgLogo}
					width="40"
					height="40"
					className="rounded-lg"
					alt="sheypoor-logo"
				/>
			</div>
			<div className="absolute right-2 top-2 rounded-full py-0.5 px-1.5">
				<label className="swap swap-rotate">
					{/* this hidden checkbox controls the state */}
					<input type="checkbox" />

					{/* Heart on icon */}
					<Heart
						className={props.favorite ? "swap-on" : "swap-off"}
						color="#ffffff"
					/>
					{/* Heart off icon */}
					<Heart
						className={props.favorite ? "swap-off" : "swap-on"}
						fill="red"
						color="#ffffff"
					/>
				</label>
			</div>
			<div className="absolute right-3 top-48 rounded-full bg-neutral-content py-0.5 px-1.5 text-black	">
				<p className="flex items-center gap-1">
					<Images size={16} />
					{props.imgAds.length}
				</p>
			</div>
			<Link
				href={`/ads/${props.title
					.replace(/\s/g, "-")
					.replace(/\//g, "-")
					.replace(/,/g, "")}`}
			>
				<div className="flex flex-col card-body gap-4">
					<Link
						href={`/adsTitle/${props.group
							.replace(/\s/g, "-")
							.replace(/\//g, "-")
							.replace(/,/g, "")}`}
						className="btn btn-sm w-fit btn-outline"
					>
						{truncatedTextGroup}
					</Link>
					<p>{truncatedTextTitle}</p>
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
			</Link>
		</div>
	);
};

export default CardAds;
