import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbard from './components/Navbard.jsx'
import Footer from './components/Footer.jsx'
import NotiUno from './components/NotiUno.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbard/>
      <div style={{ paddingTop: '6rem', paddingBottom: "5rem" }}>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/economia/finanzas-personales/¿legustaríatrabajardesdecasa?' element={<NotiUno />} />
        </Routes> 
      </div>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
