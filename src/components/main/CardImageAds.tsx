import Link from "next/link";
import _ from "lodash";
import Image from "next/image";

const CardImageAds = ({ data }: { data: string }) => {
	return (
		<div className="card card-compact w-[400px] bg-base-100 shadow-xl m-3">
			<Link href={"/"}>
				<Image
					src={data}
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
