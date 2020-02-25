import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";


const UserItem = ({ user: { login, avatar_url, html_url }}) => {
        // const {login, avatar_url, html_url} = props.user;
        return (
            <div className="card text-center">
                <img src={avatar_url} alt='avatar' className="round-img" style={{ width: "60px" }} />
                <h3>{login}</h3>
                <Link to={`html_url`} className="btn btn-dark btn-sm my-1" > More</a>
            </div>
        )
}

//ptro for shortcut
UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}


export default UserItem;
