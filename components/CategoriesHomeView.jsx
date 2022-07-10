import React from "react";
import CategoryTile from "./CategoryTile";

export default function CategoriesHomeView() {
	return (
		<section className=" w-full h-auto bg-slate-50 my-8 py-4 overflow-x-scroll flex space-x-4 scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent">
			{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
				<CategoryTile key={el} />
			))}
		</section>
	);
}
