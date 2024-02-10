import React from "react";
import Container from "../Container";
import WeatherIcon from "../WeatherIcon";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

function ForecastDetail({
	weatherIcon,
	date,
	day,
	temp,
	feels_like,
	temp_min,
	temp_max,
}) {
	return (
		<Container className="bg-gray-200 justify-evenly">
			<div className="flex items-center gap-5">
				<WeatherIcon iconName={weatherIcon} />
				<div className="flex flex-col gap-4 justify-center items-center">
					<div className="flex items-center">
						<p className="text-sm">{date}</p>&nbsp;
						<p className="text-xs">{day}</p>
					</div>
					<p className="text-3xl">{`${temp}°`}</p>
					<p>
						<span>Feels like</span>
						<span>{`${feels_like}°`}</span>
					</p>
					<p className="flex gap-3">
						<span className="flex items-center">
							<FiArrowDown />
							{temp_min}°
						</span>
						<span className="flex items-center">
							<FiArrowUp />
							{temp_max}°
						</span>
					</p>
				</div>
			</div>
		</Container>
	);
}

export default ForecastDetail;
