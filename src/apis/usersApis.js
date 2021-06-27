import config from './config';

export const signupApi = (payload) => {
	return config.post('users/signup', payload);
};