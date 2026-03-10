import React from "react";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">About Barcelona Jerseys</h1>

      <p className="text-gray-700 mb-6 text-center">
        Barcelona Football Club is one of the most famous football clubs in the world. 
        Their jerseys are loved by fans globally. Here are some of the popular jerseys.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        <div className="border p-4 rounded shadow hover:shadow-lg text-center">
          <img src={img1} alt="Barcelona Jersey" className="w-full h-60 object-cover mb-4"/>
          <h2 className="text-xl font-semibold">Barcelona Jersey 2026/27</h2>
          <p className="text-gray-600 mt-2">$900</p>
        </div>

        <div className="border p-4 rounded shadow hover:shadow-lg text-center">
          <img src={img2} alt="Pink Barcelona Jersey" className="w-full h-60 object-cover mb-4"/>
          <h2 className="text-xl font-semibold">Pink Barcelona Jersey</h2>
          <p className="text-gray-600 mt-2">$950</p>
        </div>
      </div>
    </div>
  );
};

export default About;