import React from 'react'
import PropTypes from 'prop-types'


const RepoItem = ({repo}) => {
    return (
        <div className="card">
            <h3>
                <a href={rep}
            </h3>
            
        </div>
    )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoItem;