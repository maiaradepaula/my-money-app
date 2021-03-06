import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'

import promisse from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import App from './main/App'
import reducers from './main/reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promisse, multi, thunk)(createStore)(reducers, devTools)
ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))