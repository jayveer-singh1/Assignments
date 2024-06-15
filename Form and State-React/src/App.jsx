import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Forms from "./Form1"
import Form2 from "./Form2"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Forms/>
      <Form2/> 
    </>
  )
}

export default App
