import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home";

function App() {

  // STEP 1 - SETEAR ESTADOS CON UN VALOR INICIAL
  const [credentials, setcredentials] = useState({})
  const [isUserLogged, setisUserLogged] = useState(false);

  const userHardcoded = "usuarioG16";
  const passwordHardcoded = "passw0rd";

  useEffect(() => {
    // EJECUTA ESTO

    //METODOS PARA TRABAJAR CON OBJETOS
    const objectKeys = Object.keys(credentials)
    const objectValues = Object.values(credentials)
    const entries = Object.entries(credentials)

    if (objectValues.length !== 0) {
      console.log('objectKeys', objectKeys)
      console.log('objectValues', objectValues)
      // console.log('result keys 🤯', keys)
      // console.log('result values 🤯', values)
      console.log('result entries 🤯', entries)
    }

  }, [credentials])
  

  // EXPLICACION harcoded == codigo rigido || codigo duro
  // usuarioG16 passw0rd ✅
  // usuarioG16 password 🤡
  // usuarioG16 password1 🤡
  // usuarioG15 passw0rd 🤡
  // usuarioG14 passw0rd 🤡

  const handleInputCredential = ({ target: { value, name }}) => { 
    //  DESTRUCTURING 👆🏽  event: { target: { value, name  }}
    { 
      /* STEP 4 - SETEAR MI ESTADO USER CON EL NUEVO ENTRANTE */
    }
    setcredentials({ ...credentials, [name]:  value })
    // 👍🏽 COPIA DE  OBJETO { ...object, age: 14, email: hola@devf.com, isActive:tue }
  };

  const validateLogin = () => {
    /* STEP 5 - DEFINIR UN EVENTO PARA VALIDAR LOGIN CON CREDENCIALES HARCODEADAS */

    // EJERCICIO ARREGLAR VALIDACION
    // if (user === "" || password === "") {
    //   alert("user o password vacio, validar");
    //   return;
    // }

    if (credentials.user === userHardcoded && credentials.password === passwordHardcoded) {
      {
        /* STEP 6 - DEFINIR CONDITIONAL RENDERING CON LOGIN EXTIOSO (CREACION DE UN NUEVO  ESTADO) */
      }
      setisUserLogged(true);
      setcredentials({})
    }
  };

  return (
    <div className="App">
      {!isUserLogged && (
        /* STEP 2 - ASOCIAR ESTADOS A VALOR DEL INPUT */
        /* STEP 3 - DEFINIR UN EVENTO PARA SETEAR MI ESTADO */
        <>
          <input
            required
            type="text"
            value={credentials.user}
            name="user"
            onChange={handleInputCredential}
          />

          <input
            required
            type="text"
            value={credentials.password}
            name="password"
            onChange={handleInputCredential}
          />

          <button type="submit" onClick={validateLogin}>
            Ingresar
          </button>
        </>
      )}

      {isUserLogged && <Home logout={() => setisUserLogged(false)} />}
    </div>
  );
}

export default App;
