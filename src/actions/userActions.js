import {
	registerPlayerApi,
	getAllGamesApi,
	codeVerificationApi,
	adminLoginApi,
	playersListApi
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

export const registerPlayer = (payload) => {
	return (dispatch) => {
		const PLAYER = {
			pending: true,
			failed: false,
			data: {},
		};
		dispatch({ type: 'PLAYER', data: PLAYER });
		return registerPlayerApi(payload)
			.then((todos) => {
				PLAYER.data = todos.data;
				PLAYER.pending = false;
				PLAYER.failed = false;
				dispatch({ type: 'PLAYER', data: PLAYER });
				return PLAYER;
			})
			.catch((error) => {
				PLAYER.data = {};
				PLAYER.error = error;
				PLAYER.pending = false;
				PLAYER.failed = true;
				dispatch({ type: 'PLAYER', data: PLAYER });
				return PLAYER;
			});
	};
};

export const codeVerification = (payload) => {
	return (dispatch) => {
		const CODEVERIFICATION = {
			pending: true,
			failed: false,
			data: {},
		};
		dispatch({ type: 'CODEVERIFICATION', data: CODEVERIFICATION });
		return codeVerificationApi(payload)
			.then((todos) => {
				CODEVERIFICATION.data = todos.data;
				CODEVERIFICATION.pending = false;
				CODEVERIFICATION.failed = false;
				dispatch({ type: 'CODEVERIFICATION', data: CODEVERIFICATION });
				return CODEVERIFICATION;
			})
			.catch((error) => {
				CODEVERIFICATION.data = {};
				CODEVERIFICATION.error = error;
				CODEVERIFICATION.pending = false;
				CODEVERIFICATION.failed = true;
				dispatch({ type: 'CODEVERIFICATION', data: CODEVERIFICATION });
				return CODEVERIFICATION;
			});
	};
};

export const loginAdmin = (payload, headers) => {
	return (dispatch) => {
		const USER = {
			pending: true,
			failed: false,
			data: {},
		};
		dispatch({ type: 'USER', data: USER });
		return adminLoginApi(payload, headers)
			.then((todos) => {
				USER.data = todos.data;
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
			})
			
	};
};

export const playersList = (params, payload, headers) => {
	return (dispatch) => {
		const PLAYERSLIST = {
			pending: true,
			failed: false,
			data: {},
		};
		dispatch({ type: 'PLAYERSLIST', data: PLAYERSLIST });
		return playersListApi(params, payload, headers)
			.then((todos) => {
				PLAYERSLIST.data = todos.data.data;
				PLAYERSLIST.pending = false;
				PLAYERSLIST.failed = false;
				dispatch({ type: 'PLAYERSLIST', data: PLAYERSLIST });
				return PLAYERSLIST;
			})
			.catch((error) => {
				PLAYERSLIST.data = {};
				PLAYERSLIST.error = error;
				PLAYERSLIST.pending = false;
				PLAYERSLIST.failed = true;
				dispatch({ type: 'PLAYERSLIST', data: PLAYERSLIST });
				return PLAYERSLIST;
			});
			
	};
};