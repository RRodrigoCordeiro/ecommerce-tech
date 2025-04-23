import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../pages/Home"
import Launch from "../pages/Launch"
import Sac from "../pages/Sac" 
import Sobre from "../pages/About"
import Carrinho from "../pages/Cart" 
import ProductDetail from "../pages/detail" 
import { Layout } from "../layout"
import AttendantDetails from '../pages/Attendant/details'

const PageRoutes = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>} >
          <Route path='/' element={<Home/>} />
          <Route path='/launch' element={<Launch/>} />
          <Route path='/sac' element={<Sac/>} />
          <Route path='/about' element={<Sobre/>} />
          <Route path='/cart' element={<Carrinho/>} />
          <Route path='/detail/:id' element={<ProductDetail/>} />
          <Route path='/attendantDetails/:id' element={<AttendantDetails/>} />
        </Route>
          <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default PageRoutes