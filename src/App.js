import React, { Suspense } from 'react'
import './styles.css'

import Menu from './components/Menu'
import { StandardButtonStory } from './components/buttons/StandardButton'
import { PagerButtonStory } from './components/pager/PagerButton'
import { PageIndicatorStory } from './components/pager/PageIndicator'
import { PagerStory } from './components/pager/Pager'
import { CalendarStory } from './components/Calendar'

import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'

const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
})

const App = () => {
	return (
		<div className="App">
			<Menu title="Interactions" />
			<StandardButtonStory name="Button (Standard)" />
			<PagerButtonStory name="Pager Button" />
			<PageIndicatorStory name="Page Indicator" />
			<PagerStory name="Pager" />
			<ApolloProvider client={client}>
				<ApolloHooksProvider client={client}>
					<Suspense fallback={<div>Loading...</div>}>
						<CalendarStory name="Calendar" />
					</Suspense>
				</ApolloHooksProvider>
			</ApolloProvider>
		</div>
	)
}

export default App
