import React from 'react'
import RepoItem from "./ReposItems";
import PropTypes from 'prop-types'


const Repos = ({repos}) => {
    return repos.map(repo => <RepoItem repo={repo} key={repo.id}/>)
}

Re
export default Repos;