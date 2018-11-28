import posed from 'react-pose'

const getClickable = (disabled = false, pointerEvents = true) => {
	return posed.div({
		hoverable: !disabled && pointerEvents,
		pressable: !disabled && pointerEvents,
		init: {
			opacity: 1,
			filter: 'brightness(100%)',
			transition: {
				duration: 120,
			},
		},
		hover: {
			opacity: 1,
			filter: 'brightness(112%)',
			transition: {
				duration: 150,
			},
		},
		press: {
			opacity: 1,
			filter: 'brightness(95%)',
			transition: {
				duration: 150,
			},
		},
		disabled: {
			opacity: 0.5,
			transition: {
				duration: 100,
			},
		},
	})
}

export default getClickable
