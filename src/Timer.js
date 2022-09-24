import React from 'react'

function Timer(props) {
  return (
    <div>
        <h2 id='timer-label'>{props.sessionName}</h2>
        <h1 id='time-left'>{props.mins}:{props.secs}</h1>
        <div className='timer-buttons'>
          <button id='start_stop' onClick={props.start}>Start/Stop</button>
          <button id='reset' onClick={props.reset}>Reset</button>
        </div>
        
        <audio src='./buzzer_E_major.wav' id='beep'></audio>
    </div>
  )
}

export default Timer