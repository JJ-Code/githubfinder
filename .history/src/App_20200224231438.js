import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import Users from "./components/users/Users";
import User from "./components/users/User";
import Search from "./components/users/Search";
import About from "./components/pages/About";
import axios from 'axios'


class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  }
  async componentDidMount() {
    // axios.get('https://api.github.com/users').then(res => console.log(res.data)
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secert=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    console.log(res.data);

    this.setState({ users: res.data, loading: false })
  }
  //search github users
  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secert=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    //console.log(res);
    this.setState({
      user: res.data.items,
      loading: false

    })
  }

  //Get one user
  getUser = async (username) =>{
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secert=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    //console.log(res);
    this.setState({
      users: res.data,
      loading: false

    })

  }


  //clear users from state
  clearUsers = () => {
    this.setState({
      users: [],
      loading: false
    })
  }

  //set alert
  setAlert = (msg, type) => {
    this.setState({
      alert: { msg, type }
    })

    setTimeout(() => {
      this.setState({
        alert: null
      })
    }, 3000);
  }
  render() {
    const { users, loading } = this.state
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />

            <Switch>
              <Route exact path="/" render={props =>
                (<Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
                )}></Route>

              <Route exact path="/about" component={About}/>
              <Route EXACT path="/user/:" component={About} />
            </Switch>
          </div>


        </div>
      </Router>)

  }
}

export default App;
