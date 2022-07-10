import React, { useState } from "react";
import ProductTile from "./ProductTile";
import { Pagination } from "flowbite-react";
export default function ListView() {
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(10);

	function onPageChange(e) {
		setCurrentPage((prev) => prev + 1);
		console.log(`Current Page -> ${currentPage}`);
	}
	return (
		<section className="w-full flex flex-col mb-8 items-center ">
			<section className=" h-auto m-4 md:m-16 lg:m-24 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
					<ProductTile key={el} className="" />
				))}
			</section>
			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				showIcons={true}
				onPageChange={onPageChange}
				className="self-center"
			/>
		</section>
	);
}
