import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './Reducers';

const middleware = [thunk];

const isDevelopment = process.env.NODE_ENV === 'development';

export default createStore(
	Reducers,
	isDevelopment
		? compose(
				applyMiddleware(...middleware),
				window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		  )
		: compose(applyMiddleware(...middleware)),
);
