import React, { useState, useEffect } from 'react';
import axios from 'axios'

const App = (props) => {
  const [count,setCount] = useState(0)
  const [name,setName] = useState("Sergio")
  const [character, setCharacter] = useState([])

  useEffect(() => {
    fetchApi()
      
  },[])

  const fetchApi = () => {
    axios.get("https://rickandmortyapi.com/api/character").then(res => {
      const characters = res.data.results;
      setCharacter(characters)
    }) 
  }

  // const suma = () => {
  //   setCount(count + 1)
  // }

  const resta = () => {
    setCount(count - 1)
    setName("Ale")
  }

  const reset = () => {
    setCount(0)
  }

  return (
  <>
   <h1>haz clickeado: {count}</h1>
   {character.map(character => (
    <div key={character.id}>
      <img src={character.image}/>
      <h3>{character.name}</h3>
    </div>
   ))}
   <h2>{name}</h2>
   <button onClick={()=> setCount(count + 1)}>Click para aumentar</button>
   <button onClick={resta}>Click para disminuir</button>
   <button onClick={reset}>Click para resetear</button>
  </>
 )
}

export default App