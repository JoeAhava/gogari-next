import React from "react";
import NavBar from "./NavBar";
export default function Layout({ children }) {
	return (
		<>
			<header className="px-1 md:px-8 xl:px-16 bg-white dark:bg-gray-800">
				<NavBar />
			</header>
			{children}
		</>
	);
}
