import React from "react";
import { twMerge } from "tailwind-merge";

function Container({ className, ...props }) {
	return (
		<div
			{...props}
			className={twMerge("w-full border rounded-lg flex p-4 shadow", className)}
		/>
	);
}

export default Container;
