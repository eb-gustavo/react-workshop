import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'

import App from './App'
import {emails} from './constants';
import reducer from './reducers/index'
import registerServiceWorker from './registerServiceWorker';

const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log('dispatching', action)

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action)

    console.log('next state', store.getState())
    console.groupEnd(action.type);

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
};

const initialState = {
    emails: {
        emails,
        selectedEmails: {}
    },
    filter: {
        filterText: ''
    }
};

let store = createStore(
    reducer,
    initialState,
    applyMiddleware(logger)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
