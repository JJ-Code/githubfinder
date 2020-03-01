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
import GithubState  from "./context/github/GithubState";



const App = () => {



  const [alert, setAlert] = useState(null);



  // useEffect(() => {
  //   (async function initialUsersProile() {
  //     setLoading(true)
  //     const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secert=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //     setUsers(res.data)
  //     setLoading(false)
  //   })();
  // }, []);






  //set alert
  const setAlertMsg = (msg, type) => {
    setAlert({ msg, type })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }


  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />

            <Switch>
              <Route exact path="/" render={props =>
                (<Fragment>
                  <Search
                    setAlertMsg={setAlertMsg}
                  />
                  <Users />
                </Fragment>
                )}></Route>

              <Route exact path="/about" component={About} />
              <Route EXACT path="/user/:login" render={props => (
                <User {...props}
                  getUserRepos={getUserRepos}
                  repos={repos}
               />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>

  )
}


export default App;
