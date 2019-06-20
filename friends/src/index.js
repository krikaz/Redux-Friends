import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './reducers';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
