import React, { useState } from 'react'
import PropTypes from 'prop-types'


const Search = ({ searchUsers, setAlertshowClear, clearUsers }) => {

const [text, setText] = useState("")

  const onChange = (event) => {
    //in this case it is text
    setText(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === '') {
      this.props.setAlert('Please enter user to search', 'light')
    }
    else {
      searchUsers(text)
      //console.log(this.state.text);
      setText('')
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
