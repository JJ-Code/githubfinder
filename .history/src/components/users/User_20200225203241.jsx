import React, { useEffect, Fragment } from 'react'
import Spinner from "../layout/Spinner";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";

const User = () => {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login)
    this.props.getUserRepos(this.props.match.params.login)
  }



  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      company
    } = this.props.user;

    const { loading, repos } = this.props;
    if (loading) return <Spinner />
    return (
      <Fragment>
        <Link to='/' className='btn btn-light'>Back to search</Link>
        Hireable: {' '}
        {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}
        <div className="card grid-2">
          <div className="all-center>">
            <img src={avatar_url} alt={name} className="round-img" style={{ width: "150px" }} />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>

            )}
            <a href={html_url} className="btn btn-dark my-1">Github Profile</a>
            <ul>
              <li>
                {login && <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>}
              </li>
              <li>
                {login && <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>}
              </li>
              <li>
                {login && <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>}
              </li>



            </ul>
          </div>
        </div>

        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-light">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    )
  }
}



User.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired
}


export default User