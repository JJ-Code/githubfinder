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
  //search Alert users

  //set alert
  const setAlertMsg = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => {
      setAlert(null)
    }, 3000);

    dispatch({
      type: SET_ALERT,
      payload: res.data.items
    })
  }



  return <AlertContext.Provider
    value={
      {
        alert: state,
        setAlert
      }
    }>
    {props.children}

  </AlertContext.Provider>

}

export default AlertState;