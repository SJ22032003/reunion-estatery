import React from 'react'
import errorPng from '../assets/404-error.png'

function ErrorPage() {
  return (
    <div style={{minHeight:'100vh', display:'flex', alignItems:'center',justifyContent:'center'}}>
    <center>
        <img src={errorPng} alt="error" />
    </center>
    </div>
  )
}

export default ErrorPage