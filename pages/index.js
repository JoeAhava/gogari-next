import Head from "next/head";
import { Carousel } from "flowbite-react";
import ListView from "../components/ListView";
import CategoriesHomeView from "../components/CategoriesHomeView";
export default function Home() {
	return (
		<>
			<Head>
				<title>Go-gari | Ecommerce platform</title>
				<meta
					name="description"
					content="An online shopping ecommerce platform. best online shops"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="w-full min-h-screen">
				<section className=" h-96 sm:px-2 md:px-8 lg:px-16">
					<Carousel className=" rounded-none">
						<div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
							Slide 1
						</div>
						<div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
							Slide 2
						</div>
						<div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
							Slide 3
						</div>
					</Carousel>
				</section>
				<CategoriesHomeView />
				{
					// <ListView />
				}
			</main>
		</>
	);
}
