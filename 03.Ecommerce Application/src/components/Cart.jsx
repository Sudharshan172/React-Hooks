import Header from './Header'
import { useEffect, useState } from 'react'

export default function Cart() {
  const [cartItems, setCartItems] = useState([])
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || []
    setCartItems(items)
  }, [])

  const removeItem = id => {
    const updatedCart = cartItems.filter(item => item.id !== id)
    setCartItems(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }

  const getTotalAmount = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const placeOrder = () => {
    setShowPopup(true)
    localStorage.removeItem('cart')
    setCartItems([])
  }

  const closePopup = () => setShowPopup(false)

  return (
    <>
      <Header />
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-10">Your Cart</h1>

        {cartItems.length === 0 ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
              alt="cart"
              className="h-80"
            />
          </div>
        ) : (
          <>
            <ul className="flex flex-col gap-6">
              {cartItems.map(item => (
                <li key={item.id} className="flex items-center justify-between bg-white p-4 rounded shadow">
                  <img src={item.imageUrl} alt={item.title} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1 ml-4">
                    <h2 className="font-semibold">{item.title}</h2>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-green-600 font-bold mt-1">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:bg-red-600 hover:text-white font-bold px-3 py-1 border rounded cursor-pointer"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>

            {/* Total & Place Order Button */}
            <div className="mt-6 text-right">
              <p className="text-lg font-semibold">Total: ₹{getTotalAmount()}</p>
              <button
                onClick={placeOrder}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded cursor-pointer"
              >
                Place Order
              </button>
            </div>
          </>
        )}

        {/* Popup Template */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow max-w-sm text-center">
              <h2 className="text-xl font-bold mb-2 text-green-600">Order Placed Successfully 🎉</h2>
              <p className="text-gray-600 mb-4">Your order has been confirmed.</p>
              <button
                onClick={closePopup}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-1 rounded cursor-pointer"
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
