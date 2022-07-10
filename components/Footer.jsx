import React from "react";
import { Footer as FooterFb } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
export default function Footer() {
	return (
		<FooterFb bgDark={true} className=" rounded-none">
			<div className="w-full">
				<div className="grid w-full grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
					<div>
						<FooterFb.Title title="GO-ጋሪ" />
						<FooterFb.LinkGroup col={true}>
							<FooterFb.Link href="#">About</FooterFb.Link>
							<FooterFb.Link href="#">Careers</FooterFb.Link>
							<FooterFb.Link href="#">Brand Center</FooterFb.Link>
							<FooterFb.Link href="#">Blog</FooterFb.Link>
						</FooterFb.LinkGroup>
					</div>
					<div>
						<FooterFb.Title title="help center" />
						<FooterFb.LinkGroup col={true}>
							<FooterFb.Link href="#">Discord Server</FooterFb.Link>
							<FooterFb.Link href="#">Twitter</FooterFb.Link>
							<FooterFb.Link href="#">Facebook</FooterFb.Link>
							<FooterFb.Link href="#">Contact Us</FooterFb.Link>
						</FooterFb.LinkGroup>
					</div>
					<div>
						<FooterFb.Title title="legal" />
						<FooterFb.LinkGroup col={true}>
							<FooterFb.Link href="#">Privacy Policy</FooterFb.Link>
							<FooterFb.Link href="#">Licensing</FooterFb.Link>
							<FooterFb.Link href="#">Terms & Conditions</FooterFb.Link>
						</FooterFb.LinkGroup>
					</div>
					<div>
						<FooterFb.Title title="download" />
						<FooterFb.LinkGroup col={true}>
							<FooterFb.Link href="#">iOS</FooterFb.Link>
							<FooterFb.Link href="#">Android</FooterFb.Link>
							<FooterFb.Link href="#">Windows</FooterFb.Link>
							<FooterFb.Link href="#">MacOS</FooterFb.Link>
						</FooterFb.LinkGroup>
					</div>
				</div>
				<div className="w-full bg-gray-700 py-6 px-4 sm:flex sm:items-center sm:justify-between">
					<FooterFb.Copyright href="#" by=" Go-ጋሪ™" year={2022} />
					<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
						<FooterFb.Icon href="#" icon={BsFacebook} />
						<FooterFb.Icon href="#" icon={BsInstagram} />
						<FooterFb.Icon href="#" icon={BsTwitter} />
					</div>
				</div>
			</div>
		</FooterFb>
	);
}
