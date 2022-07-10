import React from "react";
import Head from "next/head";
export default function custom404() {
	return (
		<div>
			<Head>
				<title>Go-gari | Ecommerce platform</title>
				<meta
					name="description"
					content="An online shopping ecommerce platform. best online shops"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className=" w-full h-screen">
				<h1 className=" text-center align-middle">404 | page not found</h1>
			</main>
		</div>
	);
}
