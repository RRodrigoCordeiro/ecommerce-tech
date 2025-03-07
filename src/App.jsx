import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Launch from './pages/Launch'
import Sac from './pages/Sac'
import Sobre from './pages/Sobre'
import Carrinho from "./pages/Carrinho/Carrinho"


const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/launch' element={<Launch/>} />
        <Route path='/sac' element={<Sac/>} />
        <Route path='/sobre' element={<Sobre/>} />
        <Route path='/carrinho' element={<Carrinho/>} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App