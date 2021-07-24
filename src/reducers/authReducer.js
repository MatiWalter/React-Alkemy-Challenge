import { types } from "../types/types";

const initialUser = {
	token: null,
}

export const authReducer = (state = {}, action) => {
	switch (action.type) {
		case types.login:
			return {
				...state,
				token: action.payload
			}
		case types.logout:
			return {}
		default:
			return state;
	}
}