"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";

import CardImageAds from "./CardImageAds";
import coursesData from "@/app/adsData";

export default function SwiperCarousel() {
	return (
		<>
			<Swiper
				className="w-full h-full mt-10"
				slidesPerView={1}
				spaceBetween={5}
				autoplay={{
					delay: 1000,
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
				{coursesData.map((data) => (
					<SwiperSlide key={data.id}>
						<CardImageAds {...data} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
