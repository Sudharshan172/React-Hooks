import { useEffect, useState } from 'react'

const API_STATUS = {
  INITIAL: 'INITIAL',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
  LOADING: 'LOADING',
}

const PrimeDealsSection = () => {
  const [primeDeals, setPrimeDeals] = useState([])
  const [apiStatus, setApiStatus] = useState(API_STATUS.INITIAL)

  useEffect(() => {
    const fetchPrimeDeals = async () => {
      setApiStatus(API_STATUS.LOADING)

      const jwtToken = localStorage.getItem('jwt_token')
      const url = 'https://apis.ccbp.in/prime-deals'

      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }

      const response = await fetch(url, options)

      if (response.ok) {
        const data = await response.json()
        const formattedDeals = data.prime_deals.map(product => ({
          id: product.id,
          title: product.title,
          brand: product.brand,
          price: product.price,
          imageUrl: product.image_url,
          rating: product.rating,
        }))
        setPrimeDeals(formattedDeals)
        setApiStatus(API_STATUS.SUCCESS)
      } else if (response.status === 401) {
        setApiStatus(API_STATUS.FAILURE)
      }
    }

    fetchPrimeDeals()
  }, [])

  const renderDeals = () => (
    <div>
      <h1 className="text-2xl font-bold mb-4">Exclusive Prime Deals</h1>
      <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {primeDeals.map(product => (
          <li key={product.id} className="p-4 bg-white rounded shadow hover:scale-[1.02] transition">
            <img src={product.imageUrl} alt="product" className="w-full object-cover rounded mb-2" />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-sm text-gray-600">by {product.brand}</p>
            <div className="flex justify-between items-center mt-2">
              <p className="text-green-600 font-bold">₹{product.price}</p>
              <div className="flex items-center bg-blue-500 px-2 py-1 rounded-md">
                <p className="text-white mr-1">{product.rating}</p>
                <img src="https://assets.ccbp.in/frontend/react-js/star-img.png" alt="star" className="w-4 h-4" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )

  const renderFallback = () => (
    <div className="text-center">
      <img
        src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
        alt="Register Prime"
        className="mx-auto"
      />
    </div>
  )

  const renderLoader = () => (
    <div className="flex justify-center items-center h-32">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500" />
    </div>
  )

  switch (apiStatus) {
    case API_STATUS.SUCCESS:
      return renderDeals()
    case API_STATUS.FAILURE:
      return renderFallback()
    case API_STATUS.LOADING:
      return renderLoader()
    default:
      return null
  }
}

export default PrimeDealsSection
