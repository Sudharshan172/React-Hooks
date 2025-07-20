import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showCredentials, setShowCredentials] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async e => {
    e.preventDefault()
    const response = await fetch('https://apis.ccbp.in/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    })
    const data = await response.json()
    if (response.ok) {
      localStorage.setItem('jwt_token', data.jwt_token)
      navigate('/')
    } else {
      setError(data.error_msg)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="h-10 mx-auto mb-6"
      />

      <form
        className="bg-white flex flex-col justify-center items-center p-6 rounded shadow-md w-full md:w-1/2"
        onSubmit={handleLogin}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="w-full md:w-1/2 mb-8"
        />
        <div className="mb-4 w-full">
          <input
            type="text"
            placeholder="Username"
            className="border p-2 w-full"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4 w-full">
          <input
            type="password"
            placeholder="Password"
            className="border p-2 w-full"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg cursor-pointer"
        >
          Login
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>

      {/* Toggle Credentials Button & Dropdown */}
      <button
        onClick={() => setShowCredentials(!showCredentials)}
        className="mt-6 bg-green-500 font-semibold cursor-pointer text-white px-4 py-2 rounded"
      >
        Login Credentials
      </button>

      {showCredentials && (
        <div className="mt-4 bg-white shadow rounded p-4 text-center w-full max-w-md">
          <p className="text-gray-800 font-semibold text-start">Prime User Credentials</p>
          <p className='text-gray-800 text-start'>Username: rahul<br/>Password: rahul@2021</p>
          <p className="text-gray-800 font-semibold text-start">Non Prime User Credentials</p>
          <p className='text-gray-800 text-start'>Username: raja<br/>Password: raja@2021</p>
        </div>
      )}
    </div>
  )
}

export default LoginForm
