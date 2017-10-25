import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
// import {createStore, applyMiddleware} from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import logger from 'redux-logger'

import routes from './routes';
import './index.css';


// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
// const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    /*<Provider store={store}>*/
        <Router routes={routes} history={browserHistory}/>,
    // </Provider>,
    document.getElementById('root'));


registerServiceWorker();
