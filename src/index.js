import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

import Menu from './components/Menu'
import { StandardButtonStory } from './components/buttons/StandardButton'
import { PagerButtonStory } from './components/pager/PagerButton'
import { PageIndicatorStory } from './components/pager/PageIndicator'
import { PagerStory } from './components/pager/Pager'

function App() {
	return (
		<div className="App">
			<Menu />
			<StandardButtonStory name="Button (Standard)" />
			<PagerButtonStory name="Pager Button" />
			<PageIndicatorStory name="Page Indicator" />
			<PagerStory name="Pager" />
		</div>
	)
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
