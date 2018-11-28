import React from 'react'
import { css } from 'react-emotion'
import { useAddToContents } from '../../hooks'
import ShortStory from 'short-story/dist/index.es.js'
import getClickable from '../Clickable'

const shared = `
  font-family: var(--itf-font);
  user-select: none;
`

const PagerButton = ({
	id,
	pointerEvents = true,
	color = 'green',
	direction = 'left',
	disabled = 'false',
	pose = 'init',
	onClick,
}) => {
	const anchor = useAddToContents(id)
	const Clickable = getClickable(disabled)

	return (
		<Clickable
			className={css`
				${shared}
				cursor: pointer;
				pointer-events: ${pointerEvents ? 'all' : 'none'};
			`}
			pose={disabled ? 'disabled' : pose}
			onClick={onClick}
		>
			{anchor}
			<svg
				viewBox="0 0 58 54"
				className={css`
					width: 58px;
					height: 54px;
				`}
			>
				{direction === 'left' ? (
					<g>
						<polygon
							fill="rgba(0,0,0,.2)"
							points="20,0 48,0 48,48 0,48"
							transform="translate(2, 2)"
						/>
						<polygon
							fill={`var(--itf-${color})`}
							points="20,0 48,0 48,48 0,48"
						/>
						<polyline
							points="6,4 1,16 6,28"
							stroke="white"
							fill="none"
							strokeWidth="3"
							transform="translate(24, 8)"
						/>
					</g>
				) : (
					<g>
						<polygon
							fill="rgba(0,0,0,.2)"
							points="0,0 56,0 32,48 0,48"
							transform="translate(2, 2)"
						/>
						<polygon
							fill={`var(--itf-${color})`}
							points="0,0 56,0 32,48 0,48"
						/>
						<polyline
							points="1,4 6,16 1,28"
							stroke="white"
							fill="none"
							strokeWidth="3"
							transform="translate(16, 8)"
						/>
					</g>
				)}
			</svg>
		</Clickable>
	)
}

export default PagerButton

export const PagerButtonStory = ({ name }) => {
	return (
		<ShortStory
			name={name}
			knobs={{
				pose: {
					type: 'enum',
					label: 'State',
					options: ['init', 'hover', 'press', 'disabled'],
					labels: ['Default', 'Hover', 'Press', 'Disabled'],
					default: 'init',
				},
				color: {
					type: 'enum',
					label: 'Color',
					options: ['green', 'grey'],
					labels: ['Green', 'Grey'],
					default: 'green',
				},
				direction: {
					type: 'enum',
					label: 'Direction',
					options: ['left', 'right'],
					labels: ['Left', 'Right'],
					default: 'left',
				},
				disabled: {
					type: 'boolean',
					label: 'Disabled',
					default: false,
				},
				pointerEvents: {
					type: 'boolean',
					label: 'Pointer Events',
					default: true,
				},
			}}
		>
			{state => (
				<PagerButton id={name} {...state}>
					{state.textContent}
				</PagerButton>
			)}
		</ShortStory>
	)
}
