import { AsyncStorage } from 'react-native';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';
import { autoRehydrate } from 'redux-persist';
import { reducer as servicesReducer } from './services/reducer';
import immutableTransform from 'redux-persist-transform-immutable'

const appReducer = combineReducers({
	services: servicesReducer,
});

const enhancer = compose(
	applyMiddleware(
		thunk,
	),
	devTools()
);

const store = createStore(
	appReducer,
	enhancer,
	autoRehydrate(),
);

export default store;
