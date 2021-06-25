import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { UserReducer } from './userReducers';

const rootReducers = (history) =>
	combineReducers({
		router: connectRouter(history),
		user: UserReducer,
	});

export default rootReducers;
