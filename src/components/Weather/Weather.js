"use client";
import React from "react";
import Container from "../Container";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import WeatherIcon from "../WeatherIcon";
import WeatherDetails from "../WeatherDetails";
import { format, fromUnixTime, parseISO } from "date-fns";
import { metersToKilometers, weatherType } from "@/utils";
import { WeatherContext } from "@/WeatherProvider";

function Weather() {
	const { data, isLoading } = React.useContext(WeatherContext);

	const firstData = data?.list[0];

	const weatherCondition = firstData?.weather[0].main;

	const bgColor = weatherType[weatherCondition]?.backgroundColor;

	if (isLoading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<p className="animate-bounce">Loading...</p>
			</div>
		);
	}

	return (
		<>
			<h2 className="text-xl font-semibold p-4">
				Today {format(parseISO(firstData?.dt_txt ?? ""), "MM/dd")}
			</h2>
			<div className="flex flex-col px-4 md:flex-row md:gap-4">
				<Container
					style={{ backgroundColor: bgColor || "#d1d5db" }}
					className="w-full mb-4 md:mb-0"
				>
					<div className="flex flex-col items-center gap-2 w-full">
						<WeatherIcon iconName={firstData?.weather[0].icon} />
						<span className="text-5xl">{firstData?.main.temp ?? 70}°</span>
						<p>
							<span>Feels like</span>{" "}
							<span>{firstData?.main.feels_like ?? 70}°</span>
						</p>
						<p className="flex gap-3">
							<span className="flex items-center">
								<FiArrowDown />
								{firstData?.main.temp_min ?? 0}°
							</span>
							<span className="flex items-center">
								<FiArrowUp />
								{firstData?.main.temp_max ?? 0}°
							</span>
						</p>
						<p className="capitalize">{firstData?.weather[0].description}</p>
					</div>
				</Container>
				<Container className="w-full bg-teal-200">
					<WeatherDetails
						visibility={metersToKilometers(firstData?.visibility ?? 10000)}
						humidity={`${firstData?.main.humidity}%`}
						airPressure={`${firstData?.main.pressure} hPa`}
						windSpeed={`${firstData?.wind.speed ?? 15} mph`}
						sunrise={format(
							fromUnixTime(data?.city.sunrise ?? 1702949452),
							"H:mm a"
						)}
						sunset={format(
							fromUnixTime(data?.city.sunset ?? 1702949452),
							"H:mm a"
						)}
					/>
				</Container>
			</div>
		</>
	);
}

export default Weather;
