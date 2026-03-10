import React from "react";

const Cart = ({ cartItems }) => {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">under construction</h1>

      {cartItems.length === 0 ? (
        <p className="mt-4 text-gray-500">Cart is empty</p>
      ) : (
        <ul className="mt-6">
          {cartItems.map((item, index) => (
            <li key={index} className="border p-2 mb-2">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;