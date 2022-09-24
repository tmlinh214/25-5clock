import React from 'react'
import { FaPlus,FaMinus } from 'react-icons/fa'

function Session(props) {
  return (
    <div>
        <h2 id='session-label'>Session Length</h2>
        <div className='buttons'>
            <button id='session-increment' onClick={props.increment}><FaPlus/></button>
            <span id='session-length' className='time-length'>{props.length}</span>
            <button id='session-decrement' onClick={props.decrement}><FaMinus/></button>
        </div>
    </div>
  )
}

export default Session