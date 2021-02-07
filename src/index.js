import React from 'react';
import ReactDOM from 'react-dom';
// has to be at the very top of our component hierarchy
// this is component that is made from the react-redux library
import { Provider } from 'react-redux';
// import create store
import { createStore } from 'redux';

import App from './components/App';
// import our reducers
import reducers from './reducers';

ReactDOM.render(
	// Providing information to the app from the store
	// wrap our App component around our App Component
	// Provider will get a single prop - called store
	// store will be the result of what is called from the createStore and passing in the reducers
	// Any component within our application will gain access to the provider tag through our redux store
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
