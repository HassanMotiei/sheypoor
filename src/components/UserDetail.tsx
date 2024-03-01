// components/UserDetail.tsx

import { useData } from "../context/data.context";
import { useParams } from "react-router-dom";

const UserDetail: React.FC = () => {
	const { users } = useData();
	const [user, setUser] = useState<User | null>(null);
	const { id } = useParams();

	useEffect(() => {
		const selectedUser = users.find((user) => user.id === parseInt(id));
		setUser(selectedUser);
	}, [users, id]);

	return (
		<div>
			{user && (
				<>
					<h1>{user.name}</h1>
					<p>{user.email}</p>
				</>
			)}
		</div>
	);
};

export default UserDetail;
