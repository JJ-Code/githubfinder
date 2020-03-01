import React, { useSTA } from 'react'
import PropTypes from 'prop-types'


const Search = ({ searchUsers, showClear, clearUsers }) => {
  state = {
    text: ''
  }


  const onChange = (event) => {
    //in this case it is text
    this.setState({ [event.target.name]: event.target.value })
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter user to search', 'light')
    }
    else {
      searchUsers(this.state.text)
      //console.log(this.state.text);
      this.setState({ text: '' })
    }

  }


  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input type="text" name="text" placeholder="Search Users..."
          value={this.state.text} onChange={onChange} />
        <input type="submit" value="Search" className="btn btn-dark btn-block" />
      </form>
      {showClear ? (<button className="btn btn-light btn-block" onClick={clearUsers}> Clear </button>) : null}
    </div>
  )
}



//imt shortcut to import proptype
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
}


export default Search
