export const UserReducer = (state = {}, action) => {
	switch (action.type) {
		case 'PLAYER':
			// console.log({ action, state });
			return { ...state, ...action.data };
		default:
			return state;
	}
};
