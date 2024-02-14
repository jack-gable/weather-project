"use client";
import { WeatherContext } from "@/WeatherProvider";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

function SearchBox() {
	const { handleSubmit, city, setCity } = React.useContext(WeatherContext);
	return (
		<form
			onSubmit={handleSubmit}
			className="w-full flex justify-center py-4 shadow-md bg-gray-200 animate-slideIn md:rounded-lg"
		>
			<input
				className="w-[75%] px-4 py-2 rounded-l-lg border-t border-l border-b"
				type="text"
				placeholder="Enter city name"
				value={city}
				onChange={(e) => setCity(e.target.value)}
			/>
			<button
				type="submit"
				className="bg-blue-500 rounded-r-lg px-2 hover:bg-blue-300"
			>
				<FiArrowRight />
			</button>
		</form>
	);
}

export default SearchBox;
