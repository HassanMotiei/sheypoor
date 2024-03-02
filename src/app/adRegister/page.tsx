import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import AdRegisterModal from "@/components/main/adRegister/AdRegisterModal";
import AddRegisterInput from "@/components/main/adRegister/AddRegisterInput";
import FileInput from "@/components/main/adRegister/FileInput";

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

const AdRegister = async () => {
	const [header] = await Promise.all([getHeader()]);

	return (
		<div className="mt-32">
			<div className="text-xl font-bold">Advertisement registration</div>

			<div className="grid grid-cols-2 gap-10 mt-12 max-w-screen-xl">
				<div className="flex flex-col gap-3 text-start">
					<div className="block">
						<AdRegisterModal header={header} />
					</div>
					<div>
						<AddRegisterInput />
					</div>
				</div>
				<div className="flex flex-col gap-8 text-start">
					<div>
						<FileInput />
					</div>
					<div>
						<button className="btn btn-primary">
							Advertisement registration
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdRegister;
