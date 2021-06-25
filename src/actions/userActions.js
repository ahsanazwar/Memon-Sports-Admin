import {
	signupApi,
	verifyUserApi,
	loginApi,
	twoFactorAuthApi,
	userGetApi,
	userUpdateApi,
	forgetPasswordApi,
	resetPasswordApi,
	contactusApi,
	traditionlApi,
	extendDateApi,
	createStripeCustumerApi,
	createPaymentCardApi,
	getAllCardsApi,
	getPublicFlowerApi,
	getBalanceApi,
	getTraditonByIdApi,
	sendPaymentToCustomerApi,
	joinUserTraditionApi,
	getTradByUserIdApi,
	sendStripeLoginLinkApi,
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

export const traditionalForm = (data, authToken) => {
	return (dispatch) => {
		const USER = {
			pending: true,
			failed: false,
			data: {},
		};
		dispatch({ type: 'USER', data: USER });
		return traditionlApi(data, authToken)
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

export const extendDateForm = (data, authToken) => {
	return (dispatch) => {
		const USER = {
			pending: true,
			failed: false,
			data: {},
		};
		dispatch({ type: 'USER', data: USER });
		return extendDateApi(data, authToken)
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

export const updateuser = (data, authToken) => {
	return (dispatch) => {
		const USER = {
			pending: true,
			failed: false,
			data: {},
		};
		dispatch({ type: 'USER', data: USER });
		return userUpdateApi(data, authToken)
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

export const verify = (payload) => {
	return (dispatch) => {
		const VERIFY = {
			pending: true,
			failed: false,
			data: false,
		};
		dispatch({ type: 'VERIFY_USER', data: VERIFY });
		return verifyUserApi(payload)
			.then(() => {
				VERIFY.data = true;
				VERIFY.pending = false;
				VERIFY.failed = false;
				dispatch({ type: 'VERIFY_USER', data: VERIFY });
				return VERIFY;
			})
			.catch((error) => {
				VERIFY.data = false;
				VERIFY.error = error;
				VERIFY.pending = false;
				VERIFY.failed = true;
				dispatch({ type: 'VERIFY_USER', data: VERIFY });
				return VERIFY;
			});
	};
};

export const twoFactorAuth = (payload, authToken) => {
	return (dispatch) => {
		const USER = {
			pending: true,
			failed: false,
			data: false,
		};
		dispatch({ type: 'USER', data: USER });
		return twoFactorAuthApi(payload, authToken)
			.then(() => {
				USER.data = true;
				USER.pending = false;
				USER.failed = false;
				dispatch({ type: 'USER', data: USER });
				return USER;
			})
			.catch((error) => {
				USER.data = false;
				USER.error = error;
				USER.pending = false;
				USER.failed = true;
				dispatch({ type: 'USER', data: USER });
				return USER;
			});
	};
};

export const userGet = (payload, authToken) => {
	return (dispatch) => {
		const USER = {
			pending: true,
			failed: false,
			data: false,
		};
		dispatch({ type: 'USER', data: USER });
		return userGetApi(payload, authToken)
			.then((todos) => {
				USER.data = todos.data.data;
				USER.pending = false;
				USER.failed = false;
				dispatch({ type: 'USER', data: USER });
				return USER;
			})
			.catch((error) => {
				USER.data = false;
				USER.error = error;
				USER.pending = false;
				USER.failed = true;
				dispatch({ type: 'USER', data: USER });
				return USER;
			});
	};
};

export const login = (payload) => {
	return (dispatch) => {
		const USER = {
			pending: true,
			failed: false,
			data: false,
		};
		dispatch({ type: 'USER', data: USER });
		return loginApi(payload)
			.then((todos) => {
				USER.data = todos.data.data;
				USER.pending = false;
				USER.failed = false;
				dispatch({ type: 'USER', data: USER });
				return USER;
			})
			.catch((error) => {
				USER.data = false;
				USER.error = error;
				USER.pending = false;
				USER.failed = true;
				dispatch({ type: 'USER', data: USER });
				return USER;
			});
	};
};

export const forgetPassword = (payload) => {
	return (dispatch) => {
		const USER = {
			pending: true,
			failed: false,
			data: false,
		};
		dispatch({ type: 'USER', data: USER });
		return forgetPasswordApi(payload)
			.then((todos) => {
				USER.data = todos.data.data;
				USER.pending = false;
				USER.failed = false;
				dispatch({ type: 'USER', data: USER });
				return USER;
			})
			.catch((error) => {
				USER.data = false;
				USER.error = error;
				USER.pending = false;
				USER.failed = true;
				dispatch({ type: 'USER', data: USER });
				return USER;
			});
	};
};

export const resetPassword = (payload) => {
	return (dispatch) => {
		const USER = {
			pending: true,
			failed: false,
			data: false,
		};
		dispatch({ type: 'USER', data: USER });
		return resetPasswordApi(payload)
			.then(() => {
				USER.data = true;
				USER.pending = false;
				USER.failed = false;
				dispatch({ type: 'USER', data: USER });
				return USER;
			})
			.catch((error) => {
				USER.data = false;
				USER.error = error;
				USER.pending = false;
				USER.failed = true;
				dispatch({ type: 'USER', data: USER });
				return USER;
			});
	};
};

export const contactUs = (data) => {
	return (dispatch) => {
		const USER = {
			pending: true,
			failed: false,
			data: {},
		};
		dispatch({ type: 'USER', data: USER });
		return contactusApi(data)
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

export const createStripeCustomer = (payload) => {
	return (dispatch) => {
		const USER = {
			pending: true,
			failed: false,
			data: false,
		};
		dispatch({ type: 'VERIFY_USER', data: USER });
		return createStripeCustumerApi(payload)
			.then(() => {
				USER.data = true;
				USER.pending = false;
				USER.failed = false;
				dispatch({ type: 'USER', data: USER });
				return USER;
			})
			.catch((error) => {
				USER.data = false;
				USER.error = error;
				USER.pending = false;
				USER.failed = true;
				dispatch({ type: 'USER', data: USER });
				return USER;
			});
	};
};

export const createPaymentCard = (data, authToken) => {
	return (dispatch) => {
		const USER = {
			pending: true,
			failed: false,
			data: {},
		};
		dispatch({ type: 'USER', data: USER });
		return createPaymentCardApi(data, authToken)
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

export const getAllCards = (authToken) => {
	return (dispatch) => {
		const USER = {
			pending: true,
			failed: false,
			data: false,
		};
		dispatch({ type: 'USER', data: USER });
		return getAllCardsApi(authToken)
			.then((todos) => {
				USER.data = todos.data.data;
				USER.pending = false;
				USER.failed = false;
				dispatch({ type: 'USER', data: USER });
				return USER;
			})
			.catch((error) => {
				USER.data = false;
				USER.error = error;
				USER.pending = false;
				USER.failed = true;
				dispatch({ type: 'USER', data: USER });
				return USER;
			});
	};
};

export const getPublicFlower = () => {
	return (dispatch) => {
		const USER = {
			pending: true,
			failed: false,
			data: false,
		};
		dispatch({ type: 'USER', data: USER });
		return getPublicFlowerApi()
			.then((todos) => {
				USER.data = todos.data.data;
				USER.pending = false;
				USER.failed = false;
				dispatch({ type: 'USER', data: USER });
				return USER;
			})
			.catch((error) => {
				USER.data = false;
				USER.error = error;
				USER.pending = false;
				USER.failed = true;
				dispatch({ type: 'USER', data: USER });
				return USER;
			});
	};
};

export const getBalance = (authToken) => {
	return (dispatch) => {
		const USER = {
			pending: true,
			failed: false,
			data: false,
		};
		dispatch({ type: 'USER', data: USER });
		return getBalanceApi(authToken)
			.then((todos) => {
				USER.data = todos.data.data;
				USER.pending = false;
				USER.failed = false;
				dispatch({ type: 'USER', data: USER });
				return USER;
			})
			.catch((error) => {
				USER.data = false;
				USER.error = error;
				USER.pending = false;
				USER.failed = true;
				dispatch({ type: 'USER', data: USER });
				return USER;
			});
	};
};

export const getTraditonById = (data, authToken) => {
	return (dispatch) => {
		const USER = {
			pending: true,
			failed: false,
			data: {},
		};
		dispatch({ type: 'USER', data: USER });
		return getTraditonByIdApi(data, authToken)
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

// export const sendPaymentToCustomer = (data, authToken) => {
// 	return (dispatch) => {
// 		const USER = {
// 			pending: true,
// 			failed: false,
// 			data: {},
// 		};
// 		dispatch({ type: 'USER', data: USER });
// 		return sendPaymentToCustomerApi(data, authToken)
// 			.then((todos) => {
// 				USER.data = todos.data.data;
// 				USER.pending = false;
// 				USER.failed = false;
// 				dispatch({ type: 'USER', data: USER });
// 				return USER;
// 			})
// 			.catch((error) => {
// 				USER.data = {};
// 				USER.error = error;
// 				USER.pending = false;
// 				USER.failed = true;
// 				dispatch({ type: 'USER', data: USER });
// 				return USER;
// 			});
// 	};
// };

export const sendPaymentToCustomer = (payload, authToken) => {
	return (dispatch) => {
		const VERIFY = {
			pending: true,
			failed: false,
			data: false,
		};
		dispatch({ type: 'VERIFY_USER', data: VERIFY });
		return sendPaymentToCustomerApi(payload, authToken)
			.then(() => {
				VERIFY.data = true;
				VERIFY.pending = false;
				VERIFY.failed = false;
				dispatch({ type: 'VERIFY_USER', data: VERIFY });
				return VERIFY;
			})
			.catch((error) => {
				VERIFY.data = false;
				VERIFY.error = error;
				VERIFY.pending = false;
				VERIFY.failed = true;
				dispatch({ type: 'VERIFY_USER', data: VERIFY });
				return VERIFY;
			});
	};
};

export const joinUserTradition = (data, authToken) => {
	return (dispatch) => {
		const USER = {
			pending: true,
			failed: false,
			data: {},
		};
		dispatch({ type: 'USER', data: USER });
		return joinUserTraditionApi(data, authToken)
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

export const getTradByUserId = (data) => {
	return (dispatch) => {
		const USER = {
			pending: true,
			failed: false,
			data: {},
		};
		dispatch({ type: 'USER', data: USER });
		return getTradByUserIdApi(data)
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

export const sendStripeLoginLink = (authToken) => {
	return (dispatch) => {
		const USER = {
			pending: true,
			failed: false,
			data: false,
		};
		dispatch({ type: 'USER', data: USER });
		return sendStripeLoginLinkApi(authToken)
			.then(() => {
				USER.data = true;
				USER.pending = false;
				USER.failed = false;
				dispatch({ type: 'USER', data: USER });
				return USER;
			})
			.catch((error) => {
				USER.data = false;
				USER.error = error;
				USER.pending = false;
				USER.failed = true;
				dispatch({ type: 'USER', data: USER });
				return USER;
			});
	};
};
