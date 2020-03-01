import React, { useContext } from 'react'
import AlertStatet from "../../context/alert/AlertStatet";


export const Alert = ({ alert }) => {
  const alertStatet = useContext(AlertState);
  const { loading, users } = githubContext
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    )
  )
}

export default Alert;