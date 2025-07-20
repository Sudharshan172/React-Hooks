// src/components/Header.jsx
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Header = () => {
  const navigate = useNavigate()

  const logout = () => {
    Cookies.remove('jwt_token')
    navigate('/login')
  }

  return (
    <div className='w-full bg-gray-900'>
      <nav className="container mx-auto flex justify-between items-center p-4 bg-gray-900 text-white">
      <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="website logo" className="h-10" />
      <ul className="flex gap-4">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><button onClick={logout} className='cursor-pointer'>Logout</button></li>
      </ul>
    </nav>
    </div>
  )
}

export default Header
