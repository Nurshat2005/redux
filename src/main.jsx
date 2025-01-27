import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { nurshat } from './components/redux/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={nurshat}>
    <App />
  </Provider>,
)
