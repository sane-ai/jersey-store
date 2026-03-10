import React from "react";
import { Link } from "react-router-dom"; // ✅ import Link

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Jersey Store</h1>

      <ul className="flex gap-6">
        <li>
          <Link to="/" className="cursor-pointer hover:text-yellow-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="cursor-pointer hover:text-yellow-300">
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="cursor-pointer hover:text-yellow-300">
            Cart
          </Link>
        </li>
        <li>
          <Link to="/about" className="cursor-pointer hover:text-yellow-300">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="cursor-pointer hover:text-yellow-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;