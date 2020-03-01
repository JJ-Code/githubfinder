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
			return 
				users: action.payload,
	
			
		default:
			return state;
	}

}