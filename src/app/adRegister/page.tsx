import AdRegisterModal from "@/components/main/AdRegisterModal";
import AddRegisterInput from "@/components/main/AddRegisterInput";

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
			<div className="grid grid-cols-2 gap-10 mt-12 max-w-screen-xl">
				<div className="flex flex-col gap-3 text-start">
					<div className="block">
						<AdRegisterModal />
					</div>
					<div>
						<AddRegisterInput />
					</div>
				</div>
				<div className="text-start">d</div>
			</div>
		</div>
	);
};

export default page;
