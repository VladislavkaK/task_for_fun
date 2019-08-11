import React from 'react';
import { App, EditPage } from '../../components';
import { Switch, Route } from 'react-router-dom';

const MainRoute = () => {

    return (
        <Switch>
            <Route exact={true} path='/' component={App} />
            <Route path='/items/:id' component={EditPage} />
        </Switch>
    )
}

export default MainRoute;