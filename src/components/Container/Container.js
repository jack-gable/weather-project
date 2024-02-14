import React from "react";
import { twMerge } from "tailwind-merge";

function Container({ className, ...props }) {
	return (
		<div
			{...props}
			className={twMerge(" border rounded-lg flex p-4 shadow-md", className)}
		/>
	);
}

export default Container;
