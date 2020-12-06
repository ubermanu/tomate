import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Request for notifications
if ('Notification' in window) {
  Notification.requestPermission();
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
