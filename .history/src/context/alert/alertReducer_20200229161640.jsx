import {
REMOVE_ALERT,
SET_ALERT
} from "../types";

export default (state, action) => {
	switch (action.type) {
		case REMOVE_ALERT:
			return {
				...state
			}
		case SEARCH_USERS:
			return {
				...state,
				users: action.payload,
				loading: false
			} 
			case CLEAR_USERS:
			return {
				...state,
				users: [],
				loading: false
			}
		case GET_USER:
			return {
				...state,
				user: action.payload,
				loading: false
			}
		case GET_REPOS:
			return {
				...state,
				repos: action.payload,
				loading: false
			}

		default:
			return state;
	}

}