import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/counter';
import loggedReducer from './reducers/isLogged';
import { Provider } from 'react-redux';

export const store = configureStore(
	{
		reducer: {
			counter: counterReducer,
			logged: loggedReducer,
		},
	},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>,
);
