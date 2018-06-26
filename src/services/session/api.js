import { fetchApi } from 'MobileApp/src/services/api';

const endPoints = {
	login: '/login.php',
	register: '/register.php',
	update: '/update.php',
}; 
export const login = (email, password) => fetchApi(endPoints.login, {email:email,password:password});
export const register = (username, email, password) => fetchApi(endPoints.register, {name:username,email:email,password:password});
export const update = (uid,nHealth,nFinances,nRelationships,nDevelopment,nCareer) => fetchApi(endPoints.update, {unique_id:uid,health_value:nHealth,finances_value:nFinances,relationship_value:nRelationships,development_value:nDevelopment,career_value:nCareer});
