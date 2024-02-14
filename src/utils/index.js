export function metersToKilometers(visibilityInMeters) {
	const visibilityInKilometers = visibilityInMeters / 1000;
	return `${visibilityInKilometers.toFixed(0)} km`;
}

export const weatherType = {
	Thunderstorm: {
		backgroundColor: "#164e63",
	},
	Drizzle: {
		backgroundColor: "#2563eb",
	},
	Rain: {
		backgroundColor: "#1e40af",
	},
	Snow: {
		backgroundColor: "#e2e8f0",
	},
	Clear: {
		backgroundColor: "#7dd3fc",
	},
	Clouds: {
		backgroundColor: "#6b7280",
	},
	Haze: {
		backgroundColor: "#ffedd5",
	},
	Mist: {
		backgroundColor: "#bae6fd",
	},
};
