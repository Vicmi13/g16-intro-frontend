import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className="App">
      <input type="text" name="user" id="" />
      
      <input type="text" name="password" id="" />

      <button type="submit">Ingresar</button>
    </div>
  )
}

export default App
