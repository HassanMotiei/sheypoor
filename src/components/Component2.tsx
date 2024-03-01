"use client";
import React from "react";
import { useData } from "@/context/DataContext";

const Component2: React.FC = () => {
	const { username, password, email } = useData();

	return (
		<div>
			<h2>Component 2</h2>
			<p>Username: {username}</p>
			<p>Password: {password}</p>
			<p>Email: {email}</p>
		</div>
	);
};

export default Component2;
