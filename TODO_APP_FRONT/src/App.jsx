import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <div className='Container'>
    <nav>
      <button id='Login'><p>Login</p></button>
    </nav>
    <div className='Main Center'>
        <h1>
          TASKS
        </h1>
        <div className='Tasklist'>
          {/* <div >
            <p>D1</p>
          </div>
          <div >
            <p>D2</p>
          </div> */}

          <div id='Utils'>
            <button className='AddButton Center'>
              <p>+</p>
            </button>
          </div>
        </div>
      </div>
  </div>
  </>
  )
}

export default App
