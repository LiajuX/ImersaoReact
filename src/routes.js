import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import VideoRegistration from './pages/Register/VideoRegistration';
import CategoryRegistration from './pages/Register/CategoryRegistration';

const Page404 = () => (<div>Página 404</div>);

function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route component={Home} path='/' exact />
            <Route component={VideoRegistration}  path='/cadastro/video' />
            <Route component={CategoryRegistration} path='/cadastro/categoria' />
            <Route component={Page404} />
        </Switch>
        </BrowserRouter>
    );
}

export default Routes;