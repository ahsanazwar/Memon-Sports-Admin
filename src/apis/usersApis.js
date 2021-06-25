import config from './config';

export const signupApi = (payload) => {
	return config.post('users/signup', payload);
};

export const verifyUserApi = (payload) => {
	return config.post('users/verification', payload);
};

export const loginApi = (payload) => {
	return config.post('users/login', payload);
};

export const twoFactorAuthApi = (payload, authToken) => {
	return config.post('users/twoFactorVerification', payload, {
		headers: { authorization: authToken },
	});
};

export const userGetApi = (payload, authToken) => {
	return config.get(`users/getUser/${payload}`, {
		headers: { authorization: authToken },
	});
};

export const userUpdateApi = (payload, authToken) => {
	return config.post('users/updateUser', payload, {
		headers: { authorization: authToken },
	});
};

export const forgetPasswordApi = (payload) => {
	return config.post('users/forgotPassword', payload);
};

export const resetPasswordApi = (payload) => {
	return config.post('users/resetPassword', payload);
};

export const contactusApi = (payload) => {
	return config.post('contactForm/setContactForm', payload);
};

export const traditionlApi = (payload, authToken) => {
	return config.post('traditional/createTriditional', payload, {
		headers: { authorization: authToken },
	});
};

export const extendDateApi = (payload, authToken) => {
	return config.post('traditional/extendTraditionalDate', payload, {
		headers: { authorization: authToken },
	});
};

export const createStripeCustumerApi = (payload) => {
	return config.post('users/createStripeCustomer', payload);
};

export const createPaymentCardApi = (payload, authToken) => {
	return config.post('payment/createPaymentCard', payload, {
		headers: { authorization: authToken },
	});
};

export const getAllCardsApi = (authToken) => {
	return config.get(`payment/getPaymentCards`, {
		headers: { authorization: authToken },
	});
};

export const getPublicFlowerApi = () => {
	return config.get(`traditional/getPublicFlowerList`);
};

export const getBalanceApi = (authToken) => {
	return config.get(`payment/getWalletBalance`, {
		headers: { authorization: authToken },
	});
};

export const getTraditonByIdApi = (payload, authToken) => {
	return config.post('traditional/getTraditonById', payload, {
		headers: { authorization: authToken },
	});
};

export const sendPaymentToCustomerApi = (payload, authToken) => {
	return config.post('payment/sendPaymentToCustomer', payload, {
		headers: { authorization: authToken },
	});
};

export const joinUserTraditionApi = (payload, authToken) => {
	return config.post('traditional/addUserToTradition', payload, {
		headers: { authorization: authToken },
	});
};

export const getTradByUserIdApi = (payload) => {
	return config.post('traditional/getTraditionByUserId', payload);
};

export const sendStripeLoginLinkApi = (authToken) => {
	return config.get(`users/sendStripeLoginLink`, {
		headers: { authorization: authToken },
	});
};
