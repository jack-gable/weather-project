"use client";
import { WeatherContext } from "@/WeatherProvider";
import React from "react";
import { format, parseISO } from "date-fns";
import ForecastDetail from "../ForecastDetail";

function ForecastWeather() {
	const { data } = React.useContext(WeatherContext);

	const uniqueDates = [
		...new Set(
			data?.list.map(
				(entry) => new Date(entry.dt * 1000).toISOString().split("T")[0]
			)
		),
	];

	const firstDataForeachDate = uniqueDates.map((date) => {
		return data?.list.find((entry) => {
			const entryDate = new Date(entry.dt * 1000).toISOString().split("T")[0];
			const entryTime = new Date(entry.dt * 1000).getHours();
			return entryDate === date && entryTime >= 6;
		});
	});

	return (
		<div className="flex flex-col p-4 gap-4">
			<h2 className="text-xl font-semibold">Forecast (5 day)</h2>
			{firstDataForeachDate.map((d, i) => (
				<ForecastDetail
					key={i}
					weatherIcon={d?.weather[0].icon ?? "01d"}
					date={format(parseISO(d?.dt_txt ?? ""), "MM/dd")}
					day={format(parseISO(d?.dt_txt ?? ""), "EEEE")}
					feels_like={d?.main.feels_like ?? 0}
					temp={d?.main.temp ?? 0}
					temp_max={d?.main.temp_max ?? 0}
					temp_min={d?.main.temp_min ?? 0}
				/>
			))}
		</div>
	);
}

export default ForecastWeather;
