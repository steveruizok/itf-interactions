import React from "react";
const menuContents = {};

export const useAddToContents = title => {
	menuContents[title] = title;
	return (
		<div
			id={title}
			style={{
				position: "relative",
				top: "-196px",
				visibility: "hidden",
			}}
		/>
	);
};

export const useContents = () => {
	const links = Object.keys(menuContents);
	return links;
};
