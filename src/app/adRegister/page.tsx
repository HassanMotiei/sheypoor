import AdRegisterModal from "@/components/main/AdRegisterModal"

const page = () => {
	return (
		<div className="mt-32">
			<div className="flex justify-between">
				<div className="text-xl font-bold">
					Advertisement registration
				</div>
				<div>
					<button className="btn text-lg">Clear the form</button>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-10 mt-12 max-w-screen-xl mx-auto">
				<div className="text-start">
					<div>
						<AdRegisterModal />
					</div>
					<div>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full max-w-xs"
						/>
					</div>
					<div></div>
					<div></div>
					<div></div>
					<div>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full max-w-xs"
						/>
					</div>
				</div>
				<div className="text-start">b</div>
			</div>
		</div>
	);
};

export default page;
