import React from "react"

const Navbar = () => {
  return (
  <nav className="bg-blue-900 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Jersey Store</h1>

      <ul className="flex gap-6">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Cart</li>
      </ul>
    </nav>
  )
}

export default Navbar