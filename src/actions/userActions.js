import {
	signupApi,
	getAllGamesApi
} from '../apis/usersApis';

export const getAllGames = () => {
	return (dispatch) => {
		const GAMES = {
			pending: true,
			failed: false,
			data: {},
		};
		dispatch({ type: 'GAMES', data: GAMES });
		return getAllGamesApi()
			.then((todos) => {
				GAMES.data = todos.data.data;
				GAMES.pending = false;
				GAMES.failed = false;
				dispatch({ type: 'GAMES', data: GAMES });
				return GAMES;
			})
			.catch((error) => {
				GAMES.data = [];
				GAMES.error = error;
				GAMES.pending = false;
				GAMES.failed = true;
				dispatch({ type: 'GAMES', data: GAMES });
				return GAMES;
			});
	};
};

export const signup = (data) => {
	return (dispatch) => {
		const USER = {
			pending: true,
			failed: false,
			data: {},
		};
		dispatch({ type: 'USER', data: USER });
		return signupApi(data)
			.then((todos) => {
				USER.data = todos.data.data;
				USER.pending = false;
				USER.failed = false;
				dispatch({ type: 'USER', data: USER });
				return USER;
			})
			.catch((error) => {
				USER.data = {};
				USER.error = error;
				USER.pending = false;
				USER.failed = true;
				dispatch({ type: 'USER', data: USER });
				return USER;
			});
	};
};
