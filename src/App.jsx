import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'



const App = () => {
  return (
    
      <BrowserRouter>
        <Home/>
        <div className='container'>
          <Routes>
            
            <Route path="/product" element={<Product />} />
            <Route path="/products" element={<Products />} />
          </Routes>

        </div>

      
      </BrowserRouter>
    
  )
}

export default App