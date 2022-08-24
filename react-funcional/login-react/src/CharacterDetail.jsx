import React, { useEffect, useState } from 'react'
import axios from 'axios'

const CharacterDetail = ({id}) => {

  const [infoCharacter, setinfoCharacter] = useState({})

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`https://swapi.dev/api/people/${id}`)
        setinfoCharacter(data)
        console.log('data character', data)
      } catch(error) {
        console.log('error', error)
      }
    })()
  
  // HACER MENCION DE QUE ESTE USE EFFECT DEBE DE EJECUTARSE CADA VEZ QUE id
  // CAMBIE EL CUAL ES UN PROPS QUE LES 
  }, [id])
  
  return (
    <div style={{ width: 'auto', border: "1px solid #cccccc"}}>
      <h3> Información detallada del personaje </h3>
      <div>
        <b>Nombre: {infoCharacter.name}</b>
        <ul>  
          {infoCharacter.films.length ? infoCharacter.films.map((value, index) => (
                <li key={index}>
                  Film {index + 1}-{value}
                </li>
              )): <b>Este personaje no tiene peliculas 😢</b> }
              
            </ul>
      </div>
    </div>
  )
}

export default CharacterDetail