import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter]=useState(10)
 const incrementValue=()=>{
 setCounter(counter+1)
 }
 const decrementValue=()=>{
  setCounter(counter-1)
 }
  return (
    <>
     <h1>Counter Game </h1>
     <button 
     onClick={incrementValue}
     >Add value:{counter}</button> {" "}
     <button onClick={decrementValue}
     >Remove value:{counter}</button>
     <p>Footer:{counter}</p>
     
    </>
  )
}

export default App
