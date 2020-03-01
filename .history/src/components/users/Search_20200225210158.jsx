import React, { useState } from 'react'
import PropTypes from 'prop-types'


const Search = ({ searchUsers, setAlertMsg, showClear, clearUsers }) => {

  const [text, setText] = useState("")

  const onChange = (event) => {
    //in this case it is text
    setText(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (text === '') {
      setAlertMsg('Please enter user to search', 'light')
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
          value={text} onChange={onChange} />
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
  setAlertMsg: PropTypes.func.isRequired
}


export default Search
