import React from "react";
import Image from "next/image";
import { Navbar, Dropdown, Avatar, Button } from "flowbite-react";

export default function NavBar() {
	return (
		<div>
			<Navbar fluid={true} rounded={true}>
				<Navbar.Brand href="https://flowbite.com/">
					<span className="self-center bg-slate-50 rounded w-14 h-12 mr-1 p-4 relative ">
						<Image
							src="/logo_dark.png"
							layout="fill"
							className=""
							alt="Gogari Logo"
							priority={true}
						/>
					</span>
					<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
						Go-ጋሪ
					</span>
				</Navbar.Brand>
				<div className="flex space-x-4 md:order-2">
					<Dropdown
						arrowIcon={false}
						inline={true}
						label={
							<Avatar
								alt="User settings"
								img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
								rounded={true}
							/>
						}
					>
						<Dropdown.Header>
							<span className="block text-sm">Bonnie Green</span>
							<span className="block truncate text-sm font-medium">
								name@flowbite.com
							</span>
						</Dropdown.Header>
						<Dropdown.Item>Dashboard</Dropdown.Item>
						<Dropdown.Item>Settings</Dropdown.Item>
						<Dropdown.Item>Earnings</Dropdown.Item>
						<Dropdown.Divider />
						<Dropdown.Item>
							<Button
								gradientDuoTone="cyanToBlue"
								size={"xs"}
								className=" w-full"
							>
								<svg
									className="w-6 h-6 mr-1"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
									></path>
								</svg>
								Sign out
							</Button>
						</Dropdown.Item>
					</Dropdown>
					<Navbar.Toggle />

					<Button gradientDuoTone="cyanToBlue">
						<svg
							className="w-6 h-6 mr-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
							></path>
						</svg>
						Sign out
					</Button>
				</div>
				<Navbar.Collapse>
					<Navbar.Link href="/navbars" active={true}>
						Home
					</Navbar.Link>
					<Navbar.Link href="/navbars">About</Navbar.Link>
					<Navbar.Link href="/navbars">Services</Navbar.Link>
					<Navbar.Link href="/navbars">Pricing</Navbar.Link>
					<Navbar.Link href="/navbars">Contact</Navbar.Link>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}
