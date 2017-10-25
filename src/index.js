import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
// import {createStore, applyMiddleware} from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import logger from 'redux-logger'
// import {syncHistoryWithStore} from 'react-router-redux';
// import routes from './routes';
import './index.css';
import App from './App'

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));
// const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    /*<Provider store={store}>*/
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    // </Provider>,
    document.getElementById('root'));


registerServiceWorker();
