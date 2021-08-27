import { types } from "~/types/types";

const initialUser = {
	token: null,
	logged: false
}

export const authReducer = (state = initialUser, action) => {
	switch (action.type) {
		case types.login:
			return {
				...state,
				token: action.payload,
				logged: true,
			}
		case types.logout:
			return {
				logged: false,
			}
		default:
			return state;
	}
}