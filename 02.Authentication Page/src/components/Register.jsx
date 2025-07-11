import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/register/', form);
      alert(res.data.message);
      navigate('/login');
    } catch (err) {
      alert(err.response.data.error || 'Registration failed');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <input name="username" onChange={handleChange} value={form.username} placeholder="Name" className="w-full p-2 mb-4 border rounded" />
          <input name="email" type="email" onChange={handleChange} value={form.email} placeholder="Email" className="w-full p-2 mb-4 border rounded" />
          <input name="password" type="password" onChange={handleChange} value={form.password} placeholder="Password" className="w-full p-2 mb-6 border rounded" />
          <button className="w-full bg-green-500 text-white py-2 rounded">Register</button>
        </form>
        <p className="mt-4 text-center text-sm">
          Existing user? <a href="/login" className="text-green-500 underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
