import React, { Component } from 'react'
import PropTypes from 'prop-types'


const Search = ()=> {
  state = {
    text: ''
  }


  onChange = (event) => {
    //in this case it is text
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter user to search', 'light')
    }
    else {
      this.props.searchUsers(this.state.text)
      //console.log(this.state.text);
      this.setState({ text: '' })
    }

  }

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input type="text" name="text" placeholder="Search Users..."
            value={this.state.text} onChange={this.onChange} />
          <input type="submit" value="Search" className="btn btn-dark btn-block" />
        </form>
        {showClear ? (<button className="btn btn-light btn-block" onClick={clearUsers}> Clear </button>) : null}
      </div>
    )
  }
}





export default Search
