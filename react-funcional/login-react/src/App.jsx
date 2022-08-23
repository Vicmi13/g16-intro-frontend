import { useState } from 'react'
import './App.css'


function App() {

  // STEP 1 - SETEAR ESTADOS CON UN VALOR INICIAL
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [isUserLogged, setisUserLogged] = useState(false)
  
  const userHardcoded = 'usuarioG16'
  const passwordHardcoded = 'passw0rd'
  const fecha_actual = new Date().toLocaleDateString()

  
  // EXPLICACION harcoded == codigo rigido || codigo duro 
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

  const validateLogin = () => {
    {/* STEP 5 - DEFINIR UN EVENTO PARA VALIDAR LOGIN CON CREDENCIALES HARCODEADAS */}
    if(user === userHardcoded && password === passwordHardcoded) {
        {/* STEP 6 - DEFINIR CONDITIONAL RENDERING CON LOGIN EXTIOSO (CREACION DE UN NUEVO  ESTADO) */}
        setisUserLogged(true)
      }
      
  }

  return (
    <div className="App" >

      {/* STEP 2 - ASOCIAR ESTADOS A VALOR DEL INPUT */}
      {/* STEP 3 - DEFINIR UN EVENTO PARA SETEAR MI ESTADO */}
      <input type="text" value={user} name="user" onChange={handleInputUser} />
      
      <input type="password" value={password} name="password"  onChange={handleInputPassword}  />

      <button type="submit" onClick={validateLogin}>Ingresar</button>


      {isUserLogged && <span> Usuario loggeado en el día de {fecha_actual} </span>}

     


    </div>
  )
}

export default App
