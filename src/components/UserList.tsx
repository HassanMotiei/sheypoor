"use client";
import { useData } from "@/context/data.context";

const UserList: React.FC = () => {
	const header = useData();

	return (
		<ul>
			{header &&
				header.map((user) => <li key={user.id}>{user.title}</li>)}
		</ul>
	);
};

export default UserList;
