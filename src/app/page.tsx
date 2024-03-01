import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import Header from "@/components/main/Header";
import NewAds from "@/components/main/NewAds";

const getHeader = async () => {
	const res = await prisma.header.findMany({
		select: {
			id: true,
			name: true,
			iconName: true,
			allGroup: true,
			title: true,
		},
	});
	return res;
};

const getAds = async () => {
	const res = await prisma.ads.findMany({
		select: {
			id: true,
			imgLogo: true,
			imgAds: true,
			favorite: true,
			group: true,
			title: true,
			price: true,
			city: true,
			time: true,
		},
	});
	return res;
};


export default async function Home() {
	const [ads, header] = await Promise.all([getAds(), getHeader()]);

	return (
		<main>
			<Header header={header} />
			<NewAds ads={ads} />
		</main>
	);
}
