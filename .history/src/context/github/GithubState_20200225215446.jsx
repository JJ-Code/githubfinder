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

 //search github users
  const searchUsers = async text => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secert=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    //console.log(res);
    setUsers(res.data.items)
    setLoading(false)
  }

  //Get one user
  const getUser = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secert=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    //console.log(res);
    setUser(res.data)
    setLoading(false)

  }

  //Get one user repos
  const getUserRepos = async (username) => {
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secert=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    //console.log(res);
    setRepos(res.data)
    setLoading(false)
  }

  //clear users from state
  const clearUsers = () => {
    setLoading(true);
    setUsers([]);
    setLoading(false)
  }

  //set alert
  const setAlertMsg = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

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