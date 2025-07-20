import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './Header'
import SimilarProductItem from './SimilarProductItem'

const ProductItemDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [quantity, setQuantity] = useState(0)
  const [showCounter, setShowCounter] = useState(false)

  useEffect(() => {
    const fetchDetails = async () => {
      const token = localStorage.getItem('jwt_token')
      const response = await fetch(`https://apis.ccbp.in/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (response.ok) {
        const data = await response.json()
        setProduct(data)
      }
    }

    fetchDetails()
  }, [id])

  const increase = () => {
    setQuantity(prev => prev + 1)

    const existingCart = JSON.parse(localStorage.getItem('cart')) || []
    const index = existingCart.findIndex(item => item.id === product.id)

    if (index !== -1) {
      existingCart[index].quantity += 1
    } else {
      existingCart.push({
        id: product.id,
        title: product.title,
        imageUrl: product.image_url,
        price: product.price,
        quantity: 1,
      })
    }

    localStorage.setItem('cart', JSON.stringify(existingCart))
  }

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1)
      const existingCart = JSON.parse(localStorage.getItem('cart')) || []
      const index = existingCart.findIndex(item => item.id === product.id)

      if (index !== -1) {
        existingCart[index].quantity -= 1
        localStorage.setItem('cart', JSON.stringify(existingCart))
      }
    } else {
      setQuantity(0)
      setShowCounter(false)

      const existingCart = JSON.parse(localStorage.getItem('cart')) || []
      const updatedCart = existingCart.filter(item => item.id !== product.id)
      localStorage.setItem('cart', JSON.stringify(updatedCart))
    }
  }

  const addToCart = () => {
    setShowCounter(true)
    setQuantity(1)

    const existingCart = JSON.parse(localStorage.getItem('cart')) || []
    const newItem = {
      id: product.id,
      title: product.title,
      imageUrl: product.image_url,
      price: product.price,
      quantity: 1,
    }

    const index = existingCart.findIndex(item => item.id === product.id)
    if (index !== -1) {
      existingCart[index].quantity += 1
    } else {
      existingCart.push(newItem)
    }

    localStorage.setItem('cart', JSON.stringify(existingCart))
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500" />
      </div>
    )
  }

  return (
    <>
      <Header />
      <div className="p-6 max-w-4xl mx-auto">
        <img src={product.image_url} alt={product.title} className="w-full h-72 object-cover rounded mb-4" />
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-lg text-gray-600 mb-1">₹{product.price}</p>
        <p className="text-sm text-gray-500 mb-1">{product.description}</p>
        <p className="text-sm text-blue-600 mb-1">Brand: {product.brand}</p>
        <p className="text-sm">Rating: {product.rating} ({product.total_reviews} reviews)</p>
        <p className="text-sm text-green-600 mb-4">Availability: {product.availability}</p>

        {/* Cart Controls */}
        {showCounter ? (
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={decrease}
              className="bg-gray-300 px-3 py-1 rounded text-lg font-bold"
            >−</button>
            <span className="text-xl font-bold">{quantity}</span>
            <button
              onClick={increase}
              className="bg-gray-300 px-3 py-1 rounded text-lg font-bold"
            >+</button>

            {quantity > 0 && (
              <Link
                to="/cart"
                className="ml-4 bg-blue-600 text-white font-semibold px-4 py-2 rounded"
              >
                Go to Cart
              </Link>
            )}
          </div>
        ) : (
          <button
            onClick={addToCart}
            className="mt-4 bg-green-600 text-white font-semibold px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        )}

        <h2 className="text-xl font-semibold mt-6 mb-2">Similar Products</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {product.similar_products.map(similar => (
            <SimilarProductItem key={similar.id} product={similar} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default ProductItemDetails
