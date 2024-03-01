// context/data.context.ts
"use client"
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Header } from "@/models/Header";
import { getAllHeader } from "@/services/header.service";

// Define the DataContext with a fixed initial value for children
const DataContext = createContext<Header[] | undefined>(undefined);

// Ensure DataProvider explicitly passes children to its JSX
export const DataProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isLoading, setIsLoading] = useState(true);
	const [header, setHeader] = useState<Header[] | undefined>(undefined);

	const fetchData = async () => {
		try {
			// const data = await getAllHeader();
			const [headers] = await Promise.all([getAllHeader()]);
			setHeader(headers);
			setIsLoading(false);
		} catch (error) {
			console.error("Error fetching header:", error);
		}
	};

	if (isLoading) {
		fetchData();
	}

	return (
		<DataContext.Provider value={header}>{children}</DataContext.Provider>
	);
};

export const useData = () => {
	const context = useContext(DataContext);
	// if (!context) {
	// 	throw new Error("useData must be used within a DataProvider");
	// }
	return context;
};
