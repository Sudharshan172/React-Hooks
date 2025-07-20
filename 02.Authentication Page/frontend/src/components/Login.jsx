import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:8000/auth/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
        credentials: 'include' // 🔐 important: allows cookie to be set
      });

      const data = await res.json();

      if (res.ok && data.access) {
        sessionStorage.setItem('access_token', data.access);
        alert('Login successful!');
        navigate('/');
      } else {
        alert(data.error || 'Login failed');
      }
    } catch (err) {
      alert('Network error or server down');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <input
            name="email"
            onChange={handleChange}
            value={form.email}
            placeholder="Email"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            name="password"
            type="password"
            onChange={handleChange}
            value={form.password}
            placeholder="Password"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded cursor-pointer">Login</button>
        </form>
        <p className="mt-4 text-center text-sm">
          New user? <a href="/register" className="text-blue-500 underline">Register now</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
