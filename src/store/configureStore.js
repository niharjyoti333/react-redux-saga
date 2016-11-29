import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducer';
import reduximmutablestate from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware =  createSagaMiddleware();
const middleWare = [reduximmutablestate(), sagaMiddleware];

export default function configureStore(initialState){
	const store = createStore(rootReducer,
		initialState,
		compose(applyMiddleware(...middleWare))
	);
	store.runSaga = sagaMiddleware.run;
	
	return store;
}
