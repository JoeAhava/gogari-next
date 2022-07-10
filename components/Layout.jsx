import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
export default function Layout({ children }) {
	return (
		<>
			<header className="px-1 md:px-8 xl:px-16 w-full bg-white dark:bg-gray-800">
				<NavBar />
			</header>
			{children}
			<Footer />
		</>
	);
}
