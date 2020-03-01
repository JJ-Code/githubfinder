import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import About from "./components/pages/About";
import axios from 'axios'


const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
const initialUsersProile = async ()=>{    setLoading(true)
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secert=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    setUsers(res.data.items)
    setLoading(false)}
    // eslint-disable-next-line 
  }, [])

  const MyFunctionnalComponent: React.FC = props => {
    useEffect(() => {
      // Using an IIFE
      (async function anyNameFunction() {
        await loadContent();
      })();
    }, []);
  


  // async componentDidMount() {
  //   // axios.get('https://api.github.com/users').then(res => console.log(res.data)
  //   // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
  //   this.setState({ loading: true })
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secert=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   console.log(res.data);

  //   this.setState({ users: res.data, loading: false })
  // }
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


  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={alert} />

          <Switch>
            <Route exact path="/" render={props =>
              (<Fragment>
                <Search
                  searchUsers={searchUsers}
                  clearUsers={clearUsers}
                  showClear={users.length > 0 ? true : false}
                  setAlertMsg={setAlertMsg}
                />
                <Users loading={loading} users={users} />
              </Fragment>
              )}></Route>

            <Route exact path="/about" component={About} />
            <Route EXACT path="/user/:login" render={props => (
              <User {...props}
                getUser={getUser}
                getUserRepos={getUserRepos}
                user={user}
                repos={repos}
                loading={loading} />
            )} />
          </Switch>
        </div>
      </div>
    </Router>)

}


export default App;
