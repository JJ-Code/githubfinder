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
		case SET_ALERT:
			return {
				...state,
				users: action.payload,
				loading: false
			} 
			
		default:
			return state;
	}

}