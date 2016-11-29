import {combineReducers} from 'redux';
import entryReducer from './entryReducers';
import homeReducer from './homePageReducer';
import courseReducer from './courseReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
	entryReducer,
	homeReducer,
	courseReducer,
	categoryReducer
});

export default rootReducer;
