import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({name: "", email: "", message: ""});
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-gray-700 mb-6 text-center">
        Have a question or want to say hello? Fill out the form below!
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="border p-2 rounded"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="border p-2 rounded h-32"
          required
        />
        <button
          type="submit"
          className="bg-blue-900 text-white py-2 rounded hover:bg-blue-800"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;