import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('jwt_token')
    navigate('/login')
  }

  return (
    <header className="bg-blue-500 text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">NxtTrendz</Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <button
            onClick={logout}
            className="bg-white text-blue-700 px-3 py-1 rounded font-semibold cursor-pointer"
          >
            Logout
          </button>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMobileMenuOpen(prev => !prev)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-blue-100 text-black font-semibold px-4 py-3 flex flex-col gap-3">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setMobileMenuOpen(false)}>Products</Link>
          <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>Cart</Link>
          <button
            onClick={() => {
              logout()
              setMobileMenuOpen(false)
            }}
            className="bg-red-500 text-white px-3 py-1 rounded font-semibold w-fit cursor-pointer"
          >
            Logout
          </button>
        </nav>
      )}
    </header>
  )
}

export default Header
