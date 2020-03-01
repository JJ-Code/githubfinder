import React, { useContext } from 'react'
import AlertContext from "../../context/alert/AlertContext";


export const Alert = () => {
  const AlertContext = useContext(AlertContext);
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