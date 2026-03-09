import React from "react";
import ProductCard from "../components/ProductCard";

import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import contact from "../assets/images/contact.jpg";
import one from "../assets/images/111.jpg";

const jerseys = [
  { name: "Barcelona Jersey", price: 900, image: img1 },
  { name: "Pink barcelona Jersey", price: 950, image: img2 },
  { name: "2015 barcelona Jersey", price: 650, image: img3 },
  { name: "2026/27 barcelona Jersey", price: 700, image: img4 },
  { name: "Retro barcelona Jersey", price: 350, image: img5 },
  { name: "2025/26 traning Jersey", price: 300, image: img6 },
  { name: "2025/26 barcelona Jersey", price: 250, image: contact },
  { name: "Goat him self", price: 1000000, image: one },
];

const Products = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Jerseys
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {jerseys.map((item, index) => (
          <ProductCard
            key={index}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;