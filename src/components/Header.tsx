// components/Header.tsx

import { useData } from "../context/data.context";

const Header: React.FC = () => {
	const { data } = useData();

	return (
		<header>
			{data.map((item) => (
				<div key={item.id}>
					<h1>{item.title}</h1>
					<img src={item.iconName} alt={item.name} />
				</div>
			))}
		</header>
	);
};

export default Header;
