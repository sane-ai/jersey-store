import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]); // ✅ This is required

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/products"
          element={<Products cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;