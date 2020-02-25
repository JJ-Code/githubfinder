import React from 'react'

export const Repos = ({repos}) => {
    return repos.map(repo => <RepoItem repo={repo}/>)
}
