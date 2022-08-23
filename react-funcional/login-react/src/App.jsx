import { useState } from 'react'
import './App.css'


function App() {

  // STEP 1 - SETEAR ESTADOS CON UN VALOR INICIAL
  const [user, setUser] = useState('user')
  const [password, setPassword] = useState('12345')
  
  const userHardcoded = 'usuarioG16'
  const passwordHardcoded = 'passw0rd'
  // Este login harcodeado solamente será exitoso con las siguientes credenciales:

  
  // harcoded == codigo rigido || codigo duro 

  // usuarioG16 passw0rd ✅
  // usuarioG16 password 🤡
  // usuarioG16 password1 🤡
  // usuarioG15 passw0rd 🤡
  // usuarioG14 passw0rd 🤡



  const validateLogin = (userInput, passwordInput) => {

    if(userInput === user && passwordInput === password) {
      alert('login exitoso')
    }
  }


  return (
    <div className="App">

      {/* STEP 2 - ASOCIAR ESTADOS A VALOR DEL INPUT */}
      <input type="text" value={user} name="user" id="" />
      
      <input type="password" value={password} name="password" id="" />

      <button type="submit">Ingresar</button>
    </div>
  )
}

export default App
