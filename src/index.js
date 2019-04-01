import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(todoApp);

render(
    <Provider store={store}>
       <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
