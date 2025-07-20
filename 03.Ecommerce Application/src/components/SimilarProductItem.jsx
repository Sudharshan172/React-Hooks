const SimilarProductItem = ({ product }) => {
  const { image_url, title, style, price, rating } = product

  return (
    <li className="bg-white shadow rounded p-3">
      <img src={image_url} alt={title} className="w-full object-cover rounded mb-2" />
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-500">{style}</p>
      <p className="text-green-700 font-bold mt-1">₹{price}</p>
      <p className="text-yellow-500">Rating: {rating}</p>
    </li>
  )
}

export default SimilarProductItem
