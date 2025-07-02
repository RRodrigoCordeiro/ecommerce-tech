import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../pages/Home"
import Launch from "../pages/Launch"
import Sac from "../pages/XXX" 
import Sobre from "../pages/About"
import Carrinho from "../pages/Cart" 
import { Layout } from "../layout"
import AttendantDetails from '../pages/Attendant/details'
import HeaderDetail from '../pages/XXXroductsHeaderDetail'  
import Privacy from '../pages/Privacy'
import Security from '../pages/Security'
import WorkWithUs from '../pages/WorkWithUs'
import Accessibility from '../pages/Accessibility'
import ShippingDeliveryPickup from '../pages/ShippingDeliveryPickup'
import ReturnsAndExchanges from '../pages/ReturnsAndExchanges'
import Contact from '../pages/Contact'

const PageRoutes = () => {
  return (
    // use navigation no modal para quando adicionar o item no carinho ele navegar para o cart
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>} >
          <Route path='/' element={<Home/>} />
          <Route path='/launch' element={<Launch/>} />
          <Route path='/sac' element={<Sac/>} />
          <Route path='/about' element={<Sobre/>} />
          <Route path='/cart' element={<Carrinho/>} />
          <Route path='/privacy' element={<Privacy/>} />
          <Route path='/security' element={<Security/>} />
          <Route path='/workWithUs' element={<WorkWithUs/>} />
          <Route path='/accessibility' element={<Accessibility/>}/>
          <Route path='/shippingDeliveryPickup' element={<ShippingDeliveryPickup/>} />
          <Route path='/returnsAndExchanges' element={<ReturnsAndExchanges/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/header/:category/:id' element={<HeaderDetail/>} />
          <Route path='/attendantDetails/:id' element={<AttendantDetails/>} />
        </Route>
          <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default PageRoutes