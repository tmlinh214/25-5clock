import React from 'react'
import Break from './Break'
import Session from './Session'
import Timer from './Timer'
import './styles.scss'

function App() {
  const [breakLength,setBreakLength] = React.useState(5)
  const [sessionLength,setSessionLength] = React.useState(25)
  const [session,setSession] = React.useState("Session")
  const [time, setTime] = React.useState({min:0,sec:0})
  const [count,setCount] = React.useState(false)
  
  React.useEffect(()=>{
    setTime({min:sessionLength,sec:0})
  },[sessionLength])

  function handleIncrement(id){
    if(id==='session'){
      while(sessionLength<60){
        setSessionLength(prevState=>prevState+1)
        break;
      }
      
    }
    else if(id==='break'){
      while(breakLength<60){
        setBreakLength(prevState=>prevState+1)
        break;
      }
    }
  }
function handleDecrement(id){
    if(id==='session'){
      while(sessionLength>1){
        setSessionLength(prevState=>prevState-1)
        break;
      }
      
    }
    else if(id==='break'){
      while(breakLength>1){
        setBreakLength(prevState=>prevState-1)
        break;
      }
      
    }
  }
function handleReset(){
  setBreakLength(5)
  setSessionLength(25)
  setCount(false)
  setSession("Session")
  setTime({min:sessionLength,sec:0})
  document.getElementById('beep').pause()
  document.getElementById('beep').currentTime=0
}
function handleStart(){
  setCount(prevCount=>!prevCount)
}
React.useEffect(()=>{
  if(count){
    let countInterval = setInterval(()=>{
      if(time.sec>0){
        setTime(prevState => {return {...prevState, sec:prevState.sec-1}})
      } else if(time.sec===0){
        if(time.min===0){
          setTime(session === 'Session' ? {min:breakLength,sec:0} : {min:sessionLength,sec:0})
          setSession(session === 'Session' ? "Break" : "Session")
          document.getElementById('beep').play()
        } else if(time.min>0) {
          setTime(prevState => {
            return {min: prevState.min-1,sec:59}
          })
        } else{
          setTime({min:0,sec:0})
        }
      }
    },1000)
    return ()=>{
      clearInterval(countInterval);
    }
  }
})
  

  let displayMin,displaySec
  if(time.min<10){
    displayMin = '0'+time.min.toString()
  } else{
    displayMin = time.min.toString()
  }
  if(time.sec<10 ){
    displaySec = '0'+time.sec.toString()
  } else{
    displaySec = time.sec.toString()
  }


  return (
    <div className='main-content'>
      <h1 className='title'>25 + 5 Clock</h1>
      <div className='time-control'>
        <Break length={breakLength} increment={()=>handleIncrement("break")} decrement={()=>handleDecrement("break")}/>
        <Session length={sessionLength} increment={()=>handleIncrement("session")} decrement={()=>handleDecrement("session")}/>
      </div>
      <div className='timer'>
        <Timer sessionName={session} mins={displayMin} secs={displaySec} start={handleStart} reset={handleReset}/>
      </div>
      
    </div>
  )
}

export default App