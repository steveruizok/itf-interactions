import React from 'react'
import './styles.css'

import Menu from './components/Menu'
import { StandardButtonStory } from './components/buttons/StandardButton'
import { PagerButtonStory } from './components/pager/PagerButton'
import { PageIndicatorStory } from './components/pager/PageIndicator'
import { PagerStory } from './components/pager/Pager'
import { CalendarStory } from './components/Calendar'

const App = () => {
	return (
		<div className="App">
			<Menu title="Interactions" />
			<StandardButtonStory name="Button (Standard)" />
			<PagerButtonStory name="Pager Button" />
			<PageIndicatorStory name="Page Indicator" />
			<PagerStory name="Pager" />
			<CalendarStory name="Calendar" />
		</div>
	)
}

export default App
