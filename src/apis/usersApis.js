import config from './config';

export const registerPlayerApi = (payload) => {
	return config.post('user/player/create', payload);
};

export const getAllGamesApi = () => {
	return config.get('user/player/getAllGames');
};

export const codeVerificationApi = (payload) => {
	return config.post('user/player/codeverification', payload);
};


export const adminLoginApi = (payload, headers) => {
	return config.post('user/admin/login', payload, {
		headers:{...config.defaults.headers, ...headers}
});
};

export const playersListApi = (params, payload, headers) => {
	console.log(headers)
	return config.post(`user/admin/getallplayers/${params.limit}/${params.offset}`, payload, {
		headers:{...config.defaults.headers, ...headers}
});
};

