
import { useState } from 'react'
import Grid from './components/Grid'
import AddCategory from './components/AddCategory'

function App() {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball', 'One Piece'])
  return (
    <>
      <h1>Gif App</h1>
      {
        categories.map((category) => (<Grid category={category}/>))
      }
      
      <AddCategory/>
    </>
  )
}

export default App
