import React, {
  Component
} from 'react';
import './App.css';
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from 'axios'


class App extends Component {
  state = {
    users: [],
    loading: false
  }
  async componentDidMount() {
    // axios.get('https://api.github.com/users').then(res => console.log(res.data)
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);

    this.setState({
      loading: true
    })
    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secert=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    console.log(res.data);

    this.setState({
      users: res.data,
      loading: false
    })
  }

  //search github users

  searchUsers = async text => {
    
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secert=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

    console.log(res);

    this.setState({
      users: res.data.items,
      loading: false
    })
  }

  render() {
    return ( <
      div className = "App" >
      <
      Navbar / >
      <
      div className = "container" >
      <
      Search searchUsers = {
        this.searchUsers
      }
      / > <
      Users loading = {
        this.state.loading
      }
      users = {
        this.state.users
      }
      /> <
      /div>


      <
      /div>)
    }
  }

  export default App;