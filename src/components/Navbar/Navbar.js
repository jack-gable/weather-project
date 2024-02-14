"use client";
import { WeatherContext } from "@/WeatherProvider";
import React from "react";
import { FiMapPin, FiSearch, FiSun } from "react-icons/fi";
import SearchBox from "../SearchBox";

function Navbar() {
	const { data } = React.useContext(WeatherContext);
	const [isSearchOpen, setIsSearchOpen] = React.useState(false);

	return (
		<>
			<div className="flex justify-between items-center bg-gray-300 p-4 sticky top-0 z-10 shadow">
				<div className="flex items-center justify-center gap-2">
					<h2 className="font-bold">MyWeather</h2>
					<FiSun className="text-yellow-500/70 text-xl" />
				</div>
				<div className="flex items-center gap-4">
					<div className="flex items-center gap-1">
						<span className="text-xs font-semibold md:text-sm">
							{data?.city.name}
						</span>
						<FiMapPin className="text-xl" />
					</div>
					<button
						className="hover:bg-gray-200 rounded-full p-2"
						onClick={() => setIsSearchOpen(!isSearchOpen)}
					>
						<FiSearch className="text-xl" />
					</button>
				</div>
			</div>
			{isSearchOpen && (
				<div className="md:absolute md:right-0 md:w-1/3">
					<SearchBox />
				</div>
			)}
		</>
	);
}

export default Navbar;
