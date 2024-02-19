import {
	Armchair,
	Briefcase,
	Computer,
	KanbanSquare,
	Monitor,
	Shirt,
	TabletSmartphone,
	Umbrella,
	Home,
	CarFront,
} from "lucide-react";

const Header = () => {
	return (
		<div className="flex justify-evenly items-center mt-8">
			<button className="flex flex-col items-center gap-3">
				<div className="bg-ghost p-3">
					<Shirt size={40} strokeWidth={1} />
				</div>
				Personal stuff
			</button>
			<button className="flex flex-col items-center gap-3">
				<div className="bg-ghost p-3">
					<TabletSmartphone size={40} strokeWidth={1} />
				</div>
				Phones and tablets
			</button>
			<button className="flex flex-col items-center gap-3">
				<div className="bg-ghost p-3">
					<Computer size={40} strokeWidth={1} />
				</div>
				Office and commercial
			</button>
			<button className="flex flex-col items-center gap-3">
				<div className="bg-ghost p-3">
					<Monitor size={40} strokeWidth={1} />
				</div>
				Electronic appliances
			</button>
			<button className="flex flex-col items-center gap-3">
				<div className="bg-ghost p-3">
					<Umbrella size={40} strokeWidth={1} />
				</div>
				Sports and leisure
			</button>
			<button className="flex flex-col items-center gap-3">
				<div className="bg-ghost p-3">
					<Armchair size={40} strokeWidth={1} />
				</div>
				Home Appliances
			</button>
			<button className="flex flex-col items-center gap-3">
				<div className="bg-ghost p-3">
					<Briefcase size={40} strokeWidth={1} />
				</div>
				Services and business
			</button>
			<button className="flex flex-col items-center gap-3">
				<div className="bg-ghost p-3">
					<KanbanSquare size={40} strokeWidth={1} />
				</div>
				Advertising and recruiting
			</button>
			<button className="flex flex-col items-center gap-3">
				<div className="bg-ghost p-3">
					<Home size={40} strokeWidth={1} />
				</div>
				Property and land
			</button>
			<button className="flex flex-col items-center gap-3">
				<div className="bg-ghost p-3">
					<CarFront size={40} strokeWidth={1} />
				</div>
				Car and motorcycle
			</button>
		</div>
	);
};

export default Header;
