import { Link } from 'react-router-dom'
const ProductCard = ({ productData }) => {
  const { id, title, brand, imageUrl, rating, price } = productData

  return (
    <li className="bg-white rounded shadow p-4 text-center">
      <Link to={`/products/${id}`}>
        <img src={imageUrl} alt="product" className="w-full object-cover mb-2 rounded" />
        <h2 className="text-lg text-start font-semibold">{title}</h2>
        <p className="text-sm text-start text-gray-500 mb-1">by {brand}</p>
        <div className="flex justify-between items-center mt-2">
          <p className="text-green-600 font-bold">₹{price}/-</p>
          <div className="flex items-center bg-blue-500 px-2 py-1 rounded-md">
            <p className="mr-1 text-white">{rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="w-4 h-4"
            />
          </div>
        </div>
      </Link>
    </li>
  )
}

export default ProductCard
