import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1 className="title">
        Borg Character Generator
      </h1>
      <div id="mork-img">
        <div id="placeholder">img placeholder</div>
      </div>
      <main>
        <div id="button-container">
          <button className='buttons' onClick={console.log("hello world")}>
            test
          </button>
          <button className='buttons'>
              test
          </button>
          <button className='buttons'>
            test
          </button>
       </div>
      </main>
    </>
  )
}

export default App
