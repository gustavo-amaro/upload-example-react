import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './Main';
import Files from './Files';

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/files" component={Files}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;