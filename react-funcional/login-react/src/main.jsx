import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import App from './App'
import './index.css'
import CharacterDetail from './CharacterDetail'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to='/home' />}/>
        <Route path="/home" element={<App/>}/>
        <Route path="/character/:id" element={<CharacterDetail/>}/>
        <Route path="*" element={<h3>Error 404</h3>}/>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)
