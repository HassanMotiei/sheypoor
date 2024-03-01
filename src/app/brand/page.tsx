import { PrismaClient } from "@prisma/client";
import AddBrand from "./CRUD/addBrand";
import DeleteBrand from "./CRUD/deleteBrand";
import UpdateBrand from "./CRUD/updateBrand";
import Link from "next/link";
const prisma = new PrismaClient();

const getBrands = async () => {
	const res = await prisma.brand.findMany({
		select: {
			id: true,
			name: true,
			products: true,
		},
	});
	return res;
};

const Brand = async () => {
	const [brands] = await Promise.all([getBrands()]);

	return (
		<div className="mt-32">
			<div className="mb-2 flex gap-2">
				<Link
					href="/products"
					className="bg-blue-800 rounded-lg text-white px-3 py-2"
				>
					Add Product
				</Link>
				<AddBrand />
			</div>

			<table className="table w-full">
				<thead>
					<tr>
						<th>#</th>
						<th>Brand name</th>
						<th className="text-center">Actions</th>
					</tr>
				</thead>
				<tbody>
					{brands.map((brand, index) => (
						<tr key={brand.id}>
							<td>{index + 1}</td>
							<td>{brand.name}</td>
							<td className="flex justify-center space-x-1">
								<UpdateBrand brand={brand} />
								<DeleteBrand brand={brand} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Brand;
