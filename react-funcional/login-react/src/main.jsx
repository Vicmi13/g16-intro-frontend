import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from './App'
import './index.css'
import CharacterDetail from './CharacterDetail'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/inicio" element={<App/>}/>
        <Route path="/portafolio" element={<CharacterDetail/>}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)
