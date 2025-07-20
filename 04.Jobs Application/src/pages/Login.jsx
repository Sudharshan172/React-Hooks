import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [showCredentials, setShowCredentials] = useState(false)
  const navigate = useNavigate()

  const loginUser = async () => {
    const res = await fetch('https://apis.ccbp.in/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    })
    const data = await res.json()
    if (res.ok) {
      Cookies.set('jwt_token', data.jwt_token, { expires: 7 })
      navigate('/home')
    } else {
      setErrorMsg(data.error_msg)
    }
  }

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center">
      <div className="bg-[#272727] p-8 rounded-lg w-96 shadow-lg text-white">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="mx-auto mb-6 h-10"
        />
        <label className="block mb-2 text-sm font-semibold" htmlFor="username">
          USERNAME
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded outline-none text-white"
        />

        <label className="block mb-2 text-sm font-semibold" htmlFor="password">
          PASSWORD
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded outline-none text-white"
        />

        <button
          onClick={loginUser}
          className="w-full bg-blue-600 py-2 rounded hover:bg-blue-700 transition-colors cursor-pointer"
        >
          Login
        </button>
        {errorMsg && <p className="text-red-500 mt-3 text-sm text-center">{errorMsg}</p>}

        
      </div>
      <button
          onClick={() => setShowCredentials(prev => !prev)}
          className="text-white px-3 bg-green-600 mt-4 py-2 rounded hover:bg-green-700 transition-colors cursor-pointer"
        >
          {showCredentials ? 'Hide' : 'Show'} Login Credentials
        </button>

        {showCredentials && (
          <div className="mt-4 bg-white p-4 rounded text-sm border border-gray-700">
            <p><span className="font-semibold">Username:</span> rahul</p>
            <p><span className="font-semibold">Password:</span> rahul@2021</p>
          </div>
        )}
    </div>
  )
}

export default Login
