import React, { useContext } from 'react'
import GithubContext from "../../context/alert/AlertStatet";


export const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    )
  )
}

export default Alert;