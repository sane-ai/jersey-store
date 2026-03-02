import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Cart from './pages/Cart' 

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/about" element={<About />}> </Route>
        <Route path="/products" element={<Products />}> </Route>
        <Route path="/contact" element={<Contact />}> </Route>
        <Route path="/cart" element={<Cart />}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
