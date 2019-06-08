import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import todoApp from './reducers';
import App from './components/App';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import * as serviceWorker from './serviceWorker';

const store = createStore(todoApp);

render(
    <Provider store={store}>
        <Router>
            <Route exact path="/" component={App} />
            <Route path="/footer" component={Footer} />
            <Route path="/add" component={AddTodo} />
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
