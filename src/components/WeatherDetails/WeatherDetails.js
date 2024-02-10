import React from "react";
import { FiDroplet, FiEye, FiSunrise, FiSunset, FiWind } from "react-icons/fi";
import { IoIosSpeedometer } from "react-icons/io";

function WeatherDetails({
	visibility,
	humidity,
	windSpeed,
	airPressure,
	sunrise,
	sunset,
}) {
	return (
		<div className="flex justify-between w-full">
			<div className="flex flex-col gap-5">
				<SingleWeatherDetail
					icon={<FiEye />}
					information="Visibility"
					value={visibility}
				/>
				<SingleWeatherDetail
					icon={<FiDroplet />}
					information="Humidity"
					value={humidity}
				/>
			</div>
			<div className="flex flex-col gap-5">
				<SingleWeatherDetail
					icon={<IoIosSpeedometer />}
					information="Wind Speed"
					value={windSpeed}
				/>
				<SingleWeatherDetail
					icon={<FiWind />}
					information="Air Pressure"
					value={airPressure}
				/>
			</div>
			<div className="flex flex-col gap-5">
				<SingleWeatherDetail
					icon={<FiSunrise />}
					information="Sunrise"
					value={sunrise}
				/>
				<SingleWeatherDetail
					icon={<FiSunset />}
					information="Sunset"
					value={sunset}
				/>
			</div>
		</div>
	);
}

function SingleWeatherDetail({ information, icon, value }) {
	return (
		<div className="flex flex-col justify-center items-center gap-2 text-sm font-semibold">
			<p className="whitespace-nowrap">{information}</p>
			<div className="text-3xl">{icon}</div>
			<p>{value}</p>
		</div>
	);
}

export default WeatherDetails;
