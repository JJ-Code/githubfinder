import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USERS,
    GET_REPOS
} from "../types";

export default (state, action) =>{
seitch(action.type){
    case SET_LOADING: 
    return {
        ...state,
        loading: true
    }
    default: 
    return state;
}

}