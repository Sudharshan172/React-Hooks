import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/login/', form);
      alert(res.data.message);
      // Optional: Store token in future if using JWT
      navigate('/');
    } catch (err) {
      alert(err.response.data.error || 'Login failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <input name="username" onChange={handleChange} value={form.username} placeholder="Email or Username" className="w-full p-2 mb-4 border rounded" />
          <input name="password" type="password" onChange={handleChange} value={form.password} placeholder="Password" className="w-full p-2 mb-6 border rounded" />
          <button className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
        </form>
        <p className="mt-4 text-center text-sm">
          New user? <a href="/register" className="text-blue-500 underline">Register now</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
