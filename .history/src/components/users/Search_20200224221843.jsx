import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Search extends Component {
  state = {
    text: ''
  }

  //imt shortcut to import proptype
  static propTypes = {
    searchUsers: PropTypes.func.isRequired
  }
  onChange = (event) => {
    //in this case it is text
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.searchUsers(this.state.text)
    //console.log(this.state.text);
    this.setState({ text: '' })

  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input type="text" name="text" placeholder="Search Users..."
            value={this.state.text} onChange={this.onChange} />
          <input type="submit" value="Search" className="btn btn-dark btn-block" />
        </form>
        <bottom className="btn btn-light btn-block" onClick> Clear </bottom>
      </div>
    )
  }
}

export default Search
