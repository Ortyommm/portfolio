/* import 'raf/polyfill'; */ import './css/index.css'
import React from 'react'
import './scss/index.scss'
import App from './react/App'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
if (module.hot) {
  console.clear()
  module.hot.accept()
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
