import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { BrowserRouter as Router, Route } from 'react-router-dom'

import todoApp from './reducers';
import App from './components/App';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import Persons from './components/Persons';
import * as serviceWorker from './serviceWorker';

const store = createStore(todoApp, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={App} />
            <Route path="/footer" component={Footer} />
            <Route path="/add" component={AddTodo} />
            <Route path="/persons" component={Persons} />
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
