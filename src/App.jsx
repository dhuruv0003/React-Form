import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [formdata, seetformdata] = useState(0)

  return (
    <div>
      <form action="">
        <label htmlFor="firstname">First Name</label>
        <input type="text" placeholder='Dhuruv Kumar' name="firstname"/>
      </form>
      
       
    </div>
  )
}

export default App
