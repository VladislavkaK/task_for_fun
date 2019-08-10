import React from 'react';
import { App } from '../../components';
import { Switch, Route } from 'react-router-dom';

const MainRoute = () => {

    return (
        <Switch>
            <Route exact={true} path='/' component={App} />
        </Switch>
    )
}

export default MainRoute;