"use client";
import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

export const WeatherContext = React.createContext();

export default function WeatherProvider({ children }) {
	const [place, setPlace] = React.useState("New York City");
	const { isLoading, error, data, refetch } = useQuery("repoData", async () => {
		const { data } = await axios.get(
			`https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&units=imperial`
		);
		return data;
	});

	return (
		<WeatherContext.Provider
			value={{ place, setPlace, isLoading, error, data }}
		>
			{children}
		</WeatherContext.Provider>
	);
}
