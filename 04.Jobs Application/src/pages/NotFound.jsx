// src/pages/NotFound.jsx
const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <img
        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
        alt="not found"
        className="w-64 mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
      <p className="text-gray-400 text-center max-w-md">
        We're sorry, but the page you're looking for does not exist.
      </p>
    </div>
  )
}

export default NotFound
