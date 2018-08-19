
require("bootstrap/dist/css/bootstrap.css");

import React from 'react';
import {render} from 'react-dom';


import GridContainer from './GridContainer/GridContainer'

import { Router, Route, Link, hashHistory} from 'react-router'

import { Provider } from 'react-redux'
import configureStore from '../store/index'

const store = configureStore();

class App extends React.Component {
    render(){
        return (
            <div>
                <div>Неправильный путь. Попробуйте снова.</div>
                <ul role="nav">
                    <li><Link to="/">Перейти к списко перелетов.</Link></li>
                </ul>
            </div>
        )
    }
}

render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={GridContainer}/>
            <Route path="*" component={App}/>
        </Router>
    </Provider>,
    document.getElementById('app')
);
