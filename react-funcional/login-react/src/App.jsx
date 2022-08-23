import { useState } from 'react'
import './App.css'


function App() {

  // STEP 1 - SETEAR ESTADOS CON UN VALOR INICIAL
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  
  const userHardcoded = 'usuarioG16'
  const passwordHardcoded = 'passw0rd'
  // Este login harcodeado solamente será exitoso con las siguientes credenciales:

  
  // harcoded == codigo rigido || codigo duro 

  // usuarioG16 passw0rd ✅
  // usuarioG16 password 🤡
  // usuarioG16 password1 🤡
  // usuarioG15 passw0rd 🤡
  // usuarioG14 passw0rd 🤡

  const handleInputUser = (event) => {
    {/* STEP 4 - SETEAR MI ESTADO USER CON EL NUEVO ENTRANTE */}
    setUser(event.target.value.trim())
  }

  const handleInputPassword = (event) => {
    setPassword(event.target.value)
  }

  const validateLogin = (userInput, passwordInput) => {
    if(userInput === user && passwordInput === password) {
      alert('login exitoso')
    }
  }


  return (
    <div className="App">

      {/* STEP 2 - ASOCIAR ESTADOS A VALOR DEL INPUT */}
      {/* STEP 3 - DEFINIR UN EVENTO PARA SETEAR MI ESTADO */}
      <input type="text" value={user} name="user" onChange={handleInputUser} />
      
      <input type="password" value={password} name="password"  onChange={handleInputPassword}  />

      <button type="submit">Ingresar</button>
    </div>
  )
}

export default App
