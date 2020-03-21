import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sucesso from './Sucesso';

import * as serviceWorker from './serviceWorker'
import { Switch, Route, HashRouter } from 'react-router-dom'


ReactDOM.render(
    <HashRouter>

        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/sucesso" exact={true} component={Sucesso} />
        </Switch>
    </ HashRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
