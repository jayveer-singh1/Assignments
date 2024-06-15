import { useState } from 'react'

function App() {
  let isDark = true;
  let isOpen = true;
  return (
    <>   <div style={{ background: isDark ? "black" : "white", color: isDark ? "white" : "black" }}>
      This is Containt
    </div>
    {isOpen? <div >
        IsOpen
      </div> : null}
      
    </>

  )
}

export default App
