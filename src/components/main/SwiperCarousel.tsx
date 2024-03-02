"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import CardImageAds from "./CardImageAds";
import { Images } from "lucide-react";

interface adsDataType {
	id: number;
	imgLogo: string
	imgAds: string[];
	favorite: boolean
	group: string
	title: string
	price: number
	city: string
	time: string
}

export default function SwiperCarousel(mainAdsData: adsDataType) {
	return (
		<>
			<Swiper
				className="w-full h-full mt-10"
				slidesPerView={1}
				spaceBetween={5}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				breakpoints={{
					640: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 20,
					},
				}}
				navigation={true}
				modules={[Autoplay, Navigation]}
			>
				{mainAdsData &&
					mainAdsData.imgAds &&
					mainAdsData.imgAds.map((data, index) => (
						<SwiperSlide key={index}>
							<CardImageAds data={data} />
						</SwiperSlide>
					))}
				<p className="flex items-center gap-1 text-l text-black bg-[#00000043] absolute bottom-10 left-10 px-2 py-1 rounded-lg z-10">
					<Images size={16} />
					{mainAdsData.imgAds.length}
				</p>
			</Swiper>
		</>
	);
}
