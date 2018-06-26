import * as actionTypes from './actionTypes';

export const update = session => ({
	type: actionTypes.UPDATE,
	session,
});

export const login = session => ({
	type: actionTypes.LOGIN,
	session,
});

export const register = session => ({
	type: actionTypes.REGISTER,
	session,
});
