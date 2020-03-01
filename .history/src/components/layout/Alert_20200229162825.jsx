import React, { useContext } from 'react'
import AlertState from "../../context/alert/AlertState";


export const Alert = ({ alert }) => {
  const alertState = useContext(AlertState);
  const { alert } = alertState
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    )
  )
}

export default Alert;