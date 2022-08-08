//Modules
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes'

//Style
import "./styles/global.scss";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
