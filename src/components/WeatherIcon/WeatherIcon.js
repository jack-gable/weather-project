import React from "react";
import Image from "next/image";

function WeatherIcon({ iconName, ...props }) {
	return (
		<div {...props} className="relative h-28 w-28">
			<Image
				src={`https://openweathermap.org/img/wn/${iconName}@4x.png`}
				alt="weather-icon"
				width={100}
				height={100}
				className="absolute h-full w-full"
			/>
		</div>
	);
}

export default WeatherIcon;
