import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  const username = "chai aur code"
  return (
    <div>
      <h1>Custom App {username}</h1>
      <p>Test para</p>
    </div>
  )
}

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit google</a>
)

const anotherUser = "chai"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <MyApp/>
    // MyApp()
    // anotherElement
    )
