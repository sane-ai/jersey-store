import React from "react"

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg">
      <img
        src={image}
        alt={name}
        className="w-full h-60 object-cover"
      />

      <h2 className="text-lg font-semibold mt-3">
        {name}
      </h2>

      <p className="text-gray-600">${price}</p>

      <button className="bg-black text-white w-full mt-3 py-2 rounded">
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard