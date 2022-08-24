import React, {useEffect, useState} from "react";
import axios from 'axios'

const Home = ({logout}) => {
  const fecha_actual = new Date().toLocaleDateString();
  const [charactersArray, setcharactersArray] = useState([])
  /**
   *  IMPLEMENTAR LLAMADA SWAAPI CUANDO SE MONTE EL COMPONENT, UNA SOLA VEZ
   */
  
  useEffect(() => {
    // getStarWarsCharacters()

    (async () => {
      try {
        const { data: { results } } = await axios.get('https://swapi.dev/api/people')
        setcharactersArray(results)
      } catch(error) {
        console.log('error', error)
      }
    })() // CON 👉🏽 () LA VOY A EJECUTAR 

    // return () => {
    //  alert('componente dismount')
    // }
  }, [])

  // const getStarWarsCharacters = async () => {
  //   try {
  //     const { data: { results } } = await axios.get('https://swapi.dev/api/people')
  //     console.log('result', results)
  //   } catch(error) {
  //     console.log('error', error)
  //   }
  // }
  
  // se deberá ocultar este componente ????? 🤡

  const handleLogout = () => {
     {/* STEP 2 MANDAR INFO DE COMP HIJO AL PADRE (función) */}
    logout()
  }

  return (
    <div style={{ border: "3px solid #f4f0f0", width: 250, height: 300, borderLeftColor: 'orange' }}>
      Usuario loggeado en el día de 🤡 {fecha_actual}


      {/* SINTAXIS TERNARIO condition ? true : false */}
      {charactersArray.length === 0  ? <h4> Cargando... </h4> : 
      charactersArray.map(objectInfo => (
        <h3> Nombre del personaje {objectInfo.name} - altura {objectInfo.height} </h3>
      ))
      }

      

      {/* STEP 1 DEFINIR EVENTO PARA CERRAR SESION */}
      <button onClick={handleLogout}> Cerrar sesión </button> 

    </div>
  );
};

export default Home;
