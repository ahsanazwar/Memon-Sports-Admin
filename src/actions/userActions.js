import {
	signupApi,
} from '../apis/usersApis';

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
