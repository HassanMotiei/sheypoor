// services/header.service.ts
import { PrismaClient } from "@prisma/client";
import { Header } from "@/models/Header";

const prisma = new PrismaClient();

export const getAllHeader = async (): Promise<Header[]> => {
	return await prisma.header.findMany();
};
