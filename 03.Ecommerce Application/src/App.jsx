import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import ProductItemDetails from './components/ProductItemDetails'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />

        <Route
          path="/products/:id"
          element={<ProtectedRoute><ProductItemDetails /></ProtectedRoute>}
        />

        <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
