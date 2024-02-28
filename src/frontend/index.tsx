import React from 'react'
import ReactDOM from 'react-dom/client'
import * as serviceWorker from 'src/frontend/serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client/react'
import { ApolloClient, InMemoryCache } from '@apollo/client'

import { Router } from 'src/frontend/Router'
import { Store } from 'src/frontend/store'

import 'src/assets/styles/style.scss'

const cache = new InMemoryCache()
export const graphqlClient = new ApolloClient({
    uri: '/graphql',
    cache,
})

const root = document.getElementById('root')
if (root) {
    const dom = ReactDOM.createRoot(root)
    dom.render(
        <ApolloProvider client={graphqlClient}>
            <React.StrictMode>
                <BrowserRouter>
                    <Store>
                        <Router />
                    </Store>
                </BrowserRouter>
            </React.StrictMode>
        </ApolloProvider>,
    )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
