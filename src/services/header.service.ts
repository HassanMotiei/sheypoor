// services/header.service.ts
import { PrismaClient } from "@prisma/client";
import { Header } from "@/models/Header";

const prisma = new PrismaClient();

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

// const getAds = async () => {
// 	const res = await prisma.ads.findMany({
// 		select: {
// 			id: true,
// 			imgLogo: true,
// 			imgAds: true,
// 			favorite: true,
// 			group: true,
// 			title: true,
// 			price: true,
// 			city: true,
// 			time: true,
// 		},
// 	});
// 	return res;
// };

export const getAllHeader = async (): Promise<Header[]> => {
	const [headers] = await Promise.all([getHeader()]);
	const allHeaders: Header[] = [...headers];
	return allHeaders;
};
