import React from 'react'
import { FaPlus,FaMinus } from 'react-icons/fa'

function Break(props) {
  return (
    <div>
        <h2 id='break-label'>Break Length</h2>
        <div className='buttons'>
            <button id='break-increment' onClick={props.increment}><FaPlus/></button>
            <span id='break-length' className='time-length'>{props.length}</span>
            <button id='break-decrement' onClick={props.decrement}><FaMinus/></button>
        </div>
    </div>
  )
}

export default Break