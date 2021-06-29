import config from './config';

export const signupApi = (payload) => {
	return config.post('users/signup', payload);
};

export const getAllGamesApi = () => {
	return config.get('user/player/getAllGames');
};

