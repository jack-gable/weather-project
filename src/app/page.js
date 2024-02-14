import React from "react";
import Weather from "@/components/Weather";
import ForecastWeather from "@/components/ForecastWeather";

export default function Home() {
	return (
		<main>
			<Weather />
			<ForecastWeather />
		</main>
	);
}
