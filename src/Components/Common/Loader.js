import React from 'react'
import Loading from '../assets/loading.svg'

function Loader() {
  return (
    <center>
        <img src={Loading} alt="loading" />
    </center>
  )
}

export default Loader