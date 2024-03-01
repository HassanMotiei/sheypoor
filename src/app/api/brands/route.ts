import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { Brand } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (request: Request) => {
	const body: Brand = await request.json();
	const brand = await prisma.brand.create({
		data: {
			name: body.name,
		},
	});
	return NextResponse.json(brand, { status: 201 });
};
