import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing-page';
import appMap from './pages/appMap'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" exact component={appMap} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
