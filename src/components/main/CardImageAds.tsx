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

const CardImageAds = (props: adsDataType) => {
	const originalText = props.title;
	const maxLength = 50;

	const truncatedText = _.truncate(originalText, {
		length: maxLength,
		separator: " ",
	});
	return (
		<div className="card card-compact w-[400px] bg-base-100 shadow-xl m-3">
			<Link
				href={`/ads/${props.title
					.replace(/\s/g, "-")
					.replace(/\//g, "-")}`}
			>
				<Image
					src={props.imgAds}
					alt="sheypoor-ads"
					width="400"
					height="400"
					className="rounded-lg"
				/>
			</Link>
		</div>
	);
};

export default CardImageAds;
