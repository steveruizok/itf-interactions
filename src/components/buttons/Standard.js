import React from "react";
import posed from "react-pose";
import { css } from "react-emotion";
import { useAddToContents } from "../../hooks";

const shared = {
	fontFamily: "Open Sans",
	letterSpacing: ".25",
	userSelect: "none",
	borderStyle: "solid",
	display: "flex",
	borderWidth: "0px",
	alignItems: "center",
	justifyContent: "center",
	fontWeight: "600",
	filter: "brightness(100%)",
};

const types = {
	light: {
		color: "#FFF",
		backgroundColor: "#028f70",
		borderColor: "#54565a",
	},
	dark: {
		color: "#FFF",
		backgroundColor: "#54565a",
		borderColor: "#028f70",
	},
	white: {
		color: "#54565a",
		backgroundColor: "#FFF",
		borderColor: "#54565a",
	},
	flat: {
		color: "#FFF",
		backgroundColor: "#b1b1b1",
		borderColor: "#b1b1b1",
	},
};

const sizes = {
	m: {
		fontSize: "16px",
		paddingTop: "8px",
		paddingBottom: "8px",
		paddingLeft: "32px",
		paddingRight: "32px",
	},
	s: {
		fontSize: "12px",
		paddingTop: "4px",
		paddingBottom: "4px",
		paddingLeft: "24px",
		paddingRight: "24px",
	},
};

const ButtonContainer = posed.div({
	hoverable: true,
	pressable: true,
	init: {
		filter: "brightness(100%)",
		paddingTop: "8px",
		paddingBottom: "8px",
		borderBottomWidth: "3px",
		transition: {
			duration: 120,
		},
	},
	hover: {
		filter: "brightness(112%)",
		borderBottomWidth: "3px",
		paddingTop: "8px",
		paddingBottom: "8px",
		transition: {
			duration: 150,
		},
	},
	press: {
		filter: "brightness(95%)",
		paddingTop: "9px",
		paddingBottom: "8px",
		borderBottomWidth: "2px",
		transition: {
			duration: 150,
		},
	},
});

const StandardButton = ({
	id,
	pointerEvents,
	uppercase,
	size,
	type,
	pose,
	icon,
	children,
}) => {
	const anchor = useAddToContents(id);
	return (
		<ButtonContainer
			className={css`
        ${shared}
        ${sizes[size]}
        ${types[type]}
        text-transform: ${uppercase ? "uppercase" : "none"}
      `}
			style={{ pointerEvents: pointerEvents ? "all" : "none" }}
			pose={pose}
			type={type}
			size={size}
		>
			{icon[0] && (
				<span class={`mdi mdi-${icon}`} style={{ marginRight: "8px" }} />
			)}
			{children}
			{anchor}
		</ButtonContainer>
	);
};

export default StandardButton;
