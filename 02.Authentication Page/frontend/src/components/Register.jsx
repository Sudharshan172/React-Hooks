import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const res = await fetch('http://localhost:8000/auth/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message || 'Registration successful');
        setForm({ name: '', email: '', password: '' });

        // Optional: Auto-login after register (if backend returns tokens)
        // if (data.access && data.refresh) {
        //   localStorage.setItem('access_token', data.access);
        //   localStorage.setItem('refresh_token', data.refresh);
        //   navigate('/');
        // } else {
          navigate('/login');
        // }

      } else {
        alert(data.error || 'Registration failed');
      }
    } catch (err) {
      alert('Network error or server is unreachable');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            onChange={handleChange}
            value={form.name}
            placeholder="Name"
            className="w-full p-2 mb-4 border rounded"
            required
          />
          <input
            name="email"
            type="email"
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
            className="w-full p-2 mb-6 border rounded"
            required
          />
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
