import React from 'react'
import PropTypes from 'prop-types'
import { Link  } from "react-router-dom";



const Navbar = ({title, icon}) => {
    return (
        <div className="navbar bg-primary">
            
            <i className={icon} /><h1> {title} </h1>
        </div>
    )
}

//passing in default props in functional components
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}

//this checks to see if props passed in is correct type 
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}


export default Navbar
