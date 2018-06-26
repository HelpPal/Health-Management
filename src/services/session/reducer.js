import * as actionTypes from './actionTypes';
import {
    TouchableWithoutFeedback,
    StyleSheet,
    Image,
    Alert,
} from 'react-native';
export const initialState = {
	uid:'',
    name:'',
    email:'',
    nHealth:0,
    nFinances:0,
    nRelationships:0,
    nDevelopment:0,
    nCareer:0,
    created_at:'',
    updated_at:'',
    error:false,
    error_msg:'',
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.UPDATE:
                state.error_msg = action.session.error_msg
                state.error = action.session.error
            return state
		case actionTypes.LOGIN:
            if(action.session.error == false) {
                state.uid = action.session.uid
                state.name = action.session.user.name
                state.nHealth = action.session.user.health_value
                state.nFinances = action.session.user.finances_value
                state.nRelationships = action.session.user.relationship_value
                state.nDevelopment = action.session.user.development_value
                state.nCareer = action.session.user.career_value
                state.created_at = action.session.user.created_at
                state.updated_at = action.session.user.updated_at
                state.error_msg = ''
                state.error = false
            }
            else{
                state.error_msg = action.session.error_msg
                state.error = action.session.error
            }
            return state
		case actionTypes.REGISTER:
            if(action.session.error == false) {
                state.uid = action.session.uid
                state.name = action.session.user.name
                state.email = action.session.user.email
                state.nHealth = 7
                state.nFinances = 7
                state.nRelationships = 7
                state.nDevelopment = 7
                state.nCareer = 7
                state.error_msg = ''
                state.error = false
            }
            else {
                state.error_msg = action.session.error_msg
                state.error = action.session.error
            }
            return state
		default:
			return state
	}
};

