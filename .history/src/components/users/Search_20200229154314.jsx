import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import GithubContext from "../../context/github/githubContext";


const Search = ({ setAlertMsg }) => {
  const githubContext = useContext(GithubContext)

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
      githubContext.searchUsers(text)
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
      {githubContext.users.length ? (<button className="btn btn-light btn-block" onClick={githubContext.clearUsers}> Clear </button>) : null}
    </div>
  )
}



//imt shortcut to import proptype
Search.propTypes = {
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlertMsg: PropTypes.func.isRequired
}


export default Search
