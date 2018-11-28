import React from 'react'
import posed from 'react-pose'
import { css } from 'react-emotion'
import { useAddToContents } from '../../hooks'
import ShortStory from 'short-story'

const shared = {
	fontFamily: 'var(--itf-font)',
	userSelect: 'none',
	borderStyle: 'solid',
	display: 'flex',
	borderWidth: '0px',
	alignItems: 'center',
	justifyContent: 'center',
	fontWeight: '600',
	filter: 'brightness(100%)',
}

const types = {
	light: {
		color: 'var(--white)',
		backgroundColor: 'var(--itf-green)',
		borderColor: 'var(--itf-grey)',
	},
	lightWhite: {
		color: '#FFF',
		backgroundColor: 'var(--grey-light)',
		borderColor: 'var(--white)',
	},
	grey: {
		color: '#FFF',
		backgroundColor: 'var(--itf-grey-light)',
		borderColor: 'var(--itf-grey)',
	},
	dark: {
		color: 'var(--white)',
		backgroundColor: 'var(--itf-grey)',
		borderColor: 'var(--itf-green)',
	},
	white: {
		color: 'var(--itf-grey)',
		backgroundColor: 'var(--white)',
		borderColor: 'var(--itf-grey)',
	},
	flat: {
		color: 'var(--white)',
		backgroundColor: 'var(--itf-grey-light)',
		borderColor: 'var(--itf-grey-light)',
	},
}

const sizes = {
	m: {
		fontSize: '16px',
		paddingTop: '8px',
		paddingBottom: '8px',
		paddingLeft: '32px',
		paddingRight: '32px',
		height: '44px',
	},
	s: {
		fontSize: '12px',
		paddingTop: '4px',
		paddingBottom: '4px',
		paddingLeft: '24px',
		paddingRight: '24px',
	},
}

const ButtonContainer = posed.div({
	hoverable: true,
	pressable: true,
	init: {
		filter: 'brightness(100%)',
		paddingTop: '8px',
		paddingBottom: '8px',
		borderBottomWidth: '3px',
		transition: {
			duration: 120,
		},
	},
	hover: {
		filter: 'brightness(112%)',
		borderBottomWidth: '3px',
		paddingTop: '8px',
		paddingBottom: '8px',
		transition: {
			duration: 150,
		},
	},
	press: {
		filter: 'brightness(95%)',
		paddingTop: '9px',
		paddingBottom: '8px',
		borderBottomWidth: '2px',
		transition: {
			duration: 150,
		},
	},
})

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
	const anchor = useAddToContents(id)
	return (
		<ButtonContainer
			className={css`
        ${shared}
        ${sizes[size]}
        ${types[type]}
        text-transform: ${uppercase ? 'uppercase' : 'none'}
      `}
			style={{ pointerEvents: pointerEvents ? 'all' : 'none' }}
			pose={pose}
			type={type}
			size={size}
		>
			{anchor}
			{icon && icon[0] && (
				<span class={`mdi mdi-${icon}`} style={{ marginRight: '8px' }} />
			)}
			{children}
		</ButtonContainer>
	)
}

export default StandardButton

export const StandardButtonStory = ({ name }) => {
	console.log(name)
	return (
		<ShortStory
			name={name}
			knobs={{
				textContent: {
					type: 'text',
					label: 'Text',
					default: 'Stay in the know',
				},
				icon: {
					type: 'text',
					label: 'Icon',
					default: '',
				},
				pose: {
					type: 'enum',
					label: 'State',
					options: ['init', 'hover', 'press'],
					labels: ['Default', 'Hover', 'Press'],
					default: 'init',
				},
				type: {
					type: 'enum',
					label: 'Type',
					options: ['light', 'lightWhite', 'dark', 'grey', 'white', 'flat'],
					labels: ['Light', 'Light-White', 'Dark', 'Grey', 'White', 'Flat'],
					default: 'light',
				},
				size: {
					type: 'enum',
					label: 'Size',
					options: ['s', 'm'],
					labels: ['Small', 'Large'],
					default: 'm',
				},
				uppercase: {
					type: 'boolean',
					label: 'Uppercase',
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
				<StandardButton id={name} {...state}>
					{state.textContent}
				</StandardButton>
			)}
		</ShortStory>
	)
}
