import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from '../App';
import MainPage from '../pages/MainPage';
import DetailsPage from '../pages/DetailsPage';
import NotFound from '../pages/NotFound';

const routes = (
    <Route path="/" component={App}>
        <IndexRoute path="main" component={MainPage}/>
        <Route path="details" component={DetailsPage}/>
        <Route path="*" component={NotFound}/>
    </Route>
);

export default routes;