import React from 'react'
import ReactDOM from 'react-dom/client'
import Head from './Head.jsx'
import App from './App.jsx'
import Foot from './Foot.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Head />
    <App />
    <Foot />
  </React.StrictMode>,
)
