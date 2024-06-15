import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Dark() {
  let [isDark, setIsDark] = useState(true)
  function mode() {
    setIsDark(!isDark)
  }


  return (
    <>
      <div style={{ backgroundColor: isDark ? "black" : "", color: "tan", width: '100px', height: "100px" }}>
        This IS Containt
      </div>
      <button onClick={mode}>Dark Mode</button>
    <br />

    </>
  )
}

export default Dark



export function Hide() {
  let [isOpen, setIsOpen] = useState(true)

  function onHide() {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <div style={{ visibility: isOpen ? "hidden" : "" }}>
        This is Containt
      </div>
      <button onClick={onHide}>Hide</button>
    </>
  )
}

// export default Hide