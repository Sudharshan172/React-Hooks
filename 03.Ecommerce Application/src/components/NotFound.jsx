import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="mt-15">
        <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
            alt="not-found"
            className="w-full"
        />
        </div>
        <Link to="/" className="text-blue-500 cursor pointer text-2xl mt-10 font-bold">Go to Home</Link>
    </div>
  )
}
