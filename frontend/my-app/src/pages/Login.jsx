import React from 'react'
 import { useState } from "react";

const Login = () => {
  
        const [formData, setFormData] = useState({
          
          email: '',
          password: '',
          
        });
      
        const [error, setError] = useState('');
        const { name, email, password, password2 } = formData;
      
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
          setError('');
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          if (!name || !email || !password || !password2) {
            return setError('Please fill in all fields.');
          }
      
          if (password !== password2) {
            return setError('Passwords do not match.');
          }
      
          // Proceed with registration logic (e.g. API call)
          console.log('Form submitted', formData);
        };

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Create an Account</h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>


          <button
            type="submit"
            className="w-full py-2 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
          Login 
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login
