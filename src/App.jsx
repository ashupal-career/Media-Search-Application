import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/features/counteSlice'

function App() {

  const [num,setNum] = useState(5)

  const dispatch = useDispatch() 
  const count = useSelector((state)=>state.counter.value) 


  return (
    <>
    <h1>{count}</h1>
    <button onClick={() => {dispatch(increment())}}>Increment</button>
    <button onClick={() => {dispatch(decrement())}}>Decrement</button>
    <input type="number" onChange={(e)=>{console.log(e);
    }}/>
    <button onClick={() => {dispatch(incrementByAmount(10))}}>Increment by Amount</button>
    </>
  )
}

export default App
