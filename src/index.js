import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
// import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from 'redux-logger'
import {ConnectedRouter, routerMiddleware} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'
import './index.css';
import App from './App'


const history = createHistory();
const rMiddleware = routerMiddleware(history);

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger,rMiddleware)));

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));


registerServiceWorker();
