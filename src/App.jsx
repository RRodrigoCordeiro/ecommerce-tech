import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Launch from './pages/Launch'
import Sac from './pages/SAC'
import Sobre from './pages/Sobre'
import Carrinho from "./pages/Carrinho"
import ProductDetail from './pages/detail' 
import { Layout } from './layout'


const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>} >
          <Route path='/' element={<Home/>} />
          <Route path='/launch' element={<Launch/>} />
          <Route path='/sac' element={<Sac/>} />
          <Route path='/sobre' element={<Sobre/>} />
          <Route path='/carrinho' element={<Carrinho/>} />
          <Route path='/detail/:id' element={<ProductDetail/>} />
        </Route>
          <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App