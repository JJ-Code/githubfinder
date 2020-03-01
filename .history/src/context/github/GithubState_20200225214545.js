import React, {
  useReducer
} from "react";
import axios from 'axios';
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USERS,
  GET_REPOS
} from "../types";

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }
const [state, dispatch] = useReducer(GithubState, initialState)

//Search Users

//Get User

//Get Repos

//Clear User

//Set Loading

return <GithubContext.Provider
VALUE{{
    users: state.users,
      user: state.user,
      repos: [],
      loading: false

}}



}