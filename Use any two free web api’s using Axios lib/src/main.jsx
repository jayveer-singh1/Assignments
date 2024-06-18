import React from 'react'
import ReactDOM from 'react-dom/client'
import ApiOne from './ApiOne.jsx'
import './index.css'
import ApiTwo from './ApiTwo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiOne />
    <ApiTwo/>
  </React.StrictMode>,
)
