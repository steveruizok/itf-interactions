import React from "react";
import posed from "react-pose";
import { css } from "react-emotion";
import { useAddToContents } from "../../hooks";
import ShortStory from "short-story";
import getClickable from "../Clickable";
import PagerButton from "./PagerButton";

const shared = `
  font-family: var(--itf-font);
  user-select: none;
`;

const PosedInner = posed.div({
	hoverable: true,
	hover: {
		scale: ({ active }) => (active ? 1.05 : 0.95),
		transition: {
			duration: 100,
		},
	},
	inactive: {
		scale: 0.8,
		transition: {
			duration: 150,
		},
	},
	active: {
		scale: 1,
		transition: {
			duration: 150,
		},
	},
});

const PageIndicator = ({ id, onClick, pointerEvents, active, pose }) => {
	const anchor = useAddToContents(id);
	const Clickable = getClickable(false);
	return (
		<PosedInner pose={active ? "active" : "inactive"} active={active}>
			<Clickable
				className={css`
					${shared}
					cursor: pointer;
				`}
				pose={pose}
				onClick={onClick}
			>
				{anchor}
				<svg
					viewBox="0 0 14 14"
					className={css`
						width: 14px;
						height: 14px;
					`}
				>
					<g>
						<circle
							cx="7"
							cy="7"
							r={7}
							fill={active ? "var(--itf-green)" : "var(--itf-grey-light)"}
						/>
					</g>
				</svg>
			</Clickable>
		</PosedInner>
	);
};

export default PageIndicator;

export const PageIndicatorStory = ({ name }) => {
	return (
		<ShortStory
			name={name}
			knobs={{
				pose: {
					type: "enum",
					label: "State",
					options: ["init", "hover", "press", "disabled"],
					labels: ["Default", "Hover", "Press", "Disabled"],
					default: "init",
				},
				active: {
					type: "boolean",
					label: "Active",
					default: false,
				},
				pointerEvents: {
					type: "boolean",
					label: "Pointer Events",
					default: true,
				},
			}}
		>
			{state => (
				<PageIndicator id={name} {...state}>
					{state.textContent}
				</PageIndicator>
			)}
		</ShortStory>
	);
};
