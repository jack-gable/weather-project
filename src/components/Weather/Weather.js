"use client";
import React from "react";
import Container from "../Container";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import WeatherIcon from "../WeatherIcon";
import WeatherDetails from "../WeatherDetails";
import { format, fromUnixTime } from "date-fns";
import { metersToKilometers } from "@/utils";
import { WeatherContext } from "@/WeatherProvider";

function Weather() {
	const { data, isLoading } = React.useContext(WeatherContext);

	const firstData = data?.list[0];

	if (isLoading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<p className="animate-bounce">Loading...</p>
			</div>
		);
	}

	return (
		<>
			<div className="flex flex-col px-4 pt-4">
				<Container className="mb-4 bg-sky-300">
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
				<Container className="bg-gray-300">
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
