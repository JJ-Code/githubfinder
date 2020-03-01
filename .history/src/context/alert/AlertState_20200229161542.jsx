import React, {
  useReducer
} from "react";
import AlertContext from "./alertContext";
import AlertReducer from './alertReducer';

import {
SET_ALERT,
REMOVE_ALERT
} from "../types";

const AlertState = props => {const initialState = null};
  const [state, dispatch] = useReducer(AlertReducer, initialState)

  //Search Users
  //search  users
  const searchUsers = async text => {
    setLoading()
    const res = await axios.get(`https://api..com/search/users?q=${text}&client_id=${process.env.REACT_APP__CLIENT_ID}&client_secert=${process.env.REACT_APP__CLIENT_SECRET}`)
    //console.log(res);
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    })
  }


  //set alert
  const setAlertMsg = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => {
      setAlert(null)
    }, 3000);

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    })
  }



  return <Context.Provider
    value={
      {
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos
      }
    }>
    {props.children}

  </Context.Provider>

}

export default State;