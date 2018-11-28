import React, { useState } from 'react'
import { css } from 'react-emotion'
import { useAddToContents } from '../../hooks'
import ShortStory from 'short-story/dist/index.es.js'

import PagerButton from './PagerButton'
import PageIndicator from './PageIndicator'

const Pager = ({ id, pages = 0, pointerEvents }) => {
	const anchor = useAddToContents(id)
	const pageArray = [...Array(parseInt(pages, 10)).keys()]
	const [currentPage, setCurrentPage] = useState(0)
	const [currentState, setCurrentState] = useState('min')

	const changePage = delta => {
		const next = currentPage + delta
		if (next < 0 || next > pages - 1) return

		setCurrentPage(next)
		updateState(next)
	}

	const updateState = next => {
		if (next === 0) {
			setCurrentState('min')
		} else if (next === pages - 1) {
			setCurrentState('max')
		} else if (currentState !== 'mid') {
			setCurrentState('mid')
		}
	}

	return (
		<div
			className={css`
				font-family: var(--itf-font);
				user-select: none;
				display: flex;
				align-items: center;
				justify-content: space-between;
			`}
		>
			{anchor}
			<PagerButton
				onClick={() => changePage(-1)}
				direction="left"
				color="green"
				disabled={currentState === 'min'}
			/>
			<div
				className={css`
					display: grid;
					margin: 0 40px;
					grid-auto-columns: 32px;
					grid-gap: 0px;
					grid-auto-flow: column;
				`}
			>
				{pageArray.map(i => (
					<PageIndicator
						onClick={() => {
							setCurrentPage(i)
							updateState(i)
						}}
						active={i === currentPage}
					/>
				))}
			</div>
			<PagerButton
				onClick={() => changePage(1)}
				direction="right"
				color="green"
				disabled={currentState === 'max'}
			/>
		</div>
	)
}

export default Pager

export const PagerStory = ({ name }) => {
	return (
		<ShortStory
			name={name}
			knobs={{
				pages: {
					type: 'number',
					label: 'Pages',
					min: 1,
					max: 10,
					default: 5,
					step: 1,
				},
				pointerEvents: {
					type: 'boolean',
					label: 'Pointer Events',
					default: true,
				},
			}}
		>
			{state => (
				<Pager id={name} {...state}>
					{state.textContent}
				</Pager>
			)}
		</ShortStory>
	)
}
