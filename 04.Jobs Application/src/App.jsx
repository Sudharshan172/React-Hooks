// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import JobDetails from './pages/JobDetails'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'
import NotFound from './pages/NotFound'
import { Navigate } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jobs"
          element={
            <ProtectedRoute>
              <Jobs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jobs/:id"
          element={
            <ProtectedRoute>
              <JobDetails />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
