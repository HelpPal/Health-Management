import store from 'MobileApp/src/store';
import * as api from './api';
import * as actionCreators from './actions';
import { initialState } from './reducer';

export const onLogin = (email, password) =>
	api.login(email, password)
	.then((response) => {
		store.dispatch(actionCreators.login(response));
	}).catch((exception) => {
	})

export const onRegister = (username, email, password) =>
	api.register(username, email, password)
	.then((response) => {
		store.dispatch(actionCreators.register(response));
	}).catch((exception) => {
	})

export const onUpdate = (uid,nHealth,nFinances,nRelationships,nDevelopment,nCareer) =>
	api.update(uid,nHealth,nFinances,nRelationships,nDevelopment,nCareer)
	.then((response) => {
		store.dispatch(actionCreators.update(response));
	}).catch((exception) => {
	})




