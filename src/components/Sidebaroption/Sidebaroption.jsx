import React from 'react'
import './Sidebaroption.css'

function Sidebaroption({Icon,title,number,isactive}) {
  return (
    <div className={`sidebaroption ${isactive && 'sidebaroption_active'}`}>
      <Icon></Icon>
      <h2>{title}</h2>
      <p>{number}</p>
    </div>
  )
}

export default Sidebaroption
