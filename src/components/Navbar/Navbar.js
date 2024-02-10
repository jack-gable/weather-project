"use client";
import React from "react";
import Link from "next/link";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import * as Dialog from "@radix-ui/react-dialog";

function Navbar() {
	const [showMobileMenu, setShowMobileMenu] = React.useState(false);

	return (
		<div className="flex justify-between items-center bg-gray-300 p-4 sticky top-0 z-10">
			<h2 className="font-bold">MyWeather</h2>
			<div className="flex gap-4">
				<FiSearch className="text-xl" />
				<Dialog.Root
					open={showMobileMenu}
					onOpenChange={() => setShowMobileMenu(!showMobileMenu)}
				>
					<Dialog.Trigger asChild>
						<button>
							<FiMenu className="text-xl" />
						</button>
					</Dialog.Trigger>
					<Dialog.Portal>
						<div className="fixed top-0 left-0 right-0 bottom-0 bg-transparent flex justify-end">
							<Dialog.Overlay asChild>
								<div className="absolute top-0 bottom-0 left-0 right-0 bg-slate-500/80 animate-fadeInBD"></div>
							</Dialog.Overlay>
							<Dialog.Content
								aria-label="Menu"
								className="relative bg-white w-[300px] h-full px-5 py-6"
							>
								<div className="flex flex-col h-full animate-fadeInIW">
									<Dialog.Close asChild>
										<button className="absolute top-3 right-4 p-4">
											<FiX className="text-2xl" />
										</button>
									</Dialog.Close>
									<nav className="flex flex-col gap-4 mx-auto py-16">
										<Link
											className="font-bold active:text-blue-500"
											href="/"
											onClick={() => setShowMobileMenu(false)}
										>
											Home
										</Link>
										<Link
											className="font-bold active:text-blue-500"
											href="/forecast"
											onClick={() => setShowMobileMenu(false)}
										>
											Forecast (5 days)
										</Link>
									</nav>
								</div>
							</Dialog.Content>
						</div>
					</Dialog.Portal>
				</Dialog.Root>
			</div>
		</div>
	);
}

export default Navbar;
