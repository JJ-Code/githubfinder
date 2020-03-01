import {
	SEARCH_USERS,
	SET_LOADING,
	CLEAR_USERS,
	GET_USERS,
	GET_REPOS
} from "../types";

export default (state, action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				loading: true
			}
		case SEARCH_USERS:
			return {
				...state,
				users: action.payload,
				loading: false
			} 
			case CLEAR_USERS:
			return {
... state,

			}

		default:
			return state;
	}

}