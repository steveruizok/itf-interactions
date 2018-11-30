import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-client-preset'

import App from './App'

const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
})

const rootElement = document.getElementById('root')
ReactDOM.render(
	<ApolloProvider client={client}>
		<ApolloHooksProvider client={client}>
			<Suspense fallback={<div>Loading...</div>}>
				<App />
			</Suspense>
		</ApolloHooksProvider>
	</ApolloProvider>,
	rootElement
)
