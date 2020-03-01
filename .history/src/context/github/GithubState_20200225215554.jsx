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
  //search github users
  const searchUsers = async text => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secert=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    //console.log(res);
    setUsers(res.data.items)
    setLoading(false)
  }

  //Get User

  //Get Repos

  //Clear User

  //Set Loading
  cons

  return <GithubContext.Provider
    value={
      {
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading
      }
    }>
    {props.children}

  </GithubContext.Provider>

}

export default GithubState;