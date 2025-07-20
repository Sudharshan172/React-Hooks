import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import AppPage from './components/AppPage'; // You still need this component

const Home = () => {
  const navigate = useNavigate();
  const accessToken = sessionStorage.getItem('access_token');

  const handleLogout = () => {
    sessionStorage.removeItem('access_token');
    document.cookie = 'refresh_token=; Max-Age=0; path=/;';
    alert('Logged out successfully');
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-green-600 mb-6">
        Welcome{accessToken ? ", you're logged in!" : ''}
      </h1>
      {accessToken ? (
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-6 py-2 rounded cursor-pointer"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-6 py-2 rounded cursor-pointer"
        >
          Login
        </button>
      )}
    </div>
  );
};


function App() {
  const accessToken = sessionStorage.getItem('access_token');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/app"
          element={
            accessToken ? <AppPage /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
