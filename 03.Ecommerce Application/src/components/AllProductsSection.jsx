import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import ProductsHeader from './ProductsHeader'

const AllProductsSection = () => {
  const [productsList, setProductsList] = useState([])
  const [sortBy, setSortBy] = useState('')

  const sortOptions = [
    { optionId: 'PRICE_LOW', displayText: 'Price (Low to High)' },
    { optionId: 'PRICE_HIGH', displayText: 'Price (High to Low)' },
  ]

  useEffect(() => {
    const getProducts = async () => {
      const jwtToken = localStorage.getItem("jwt_token")
      const apiUrl = "https://apis.ccbp.in/products"

      const response = await fetch(apiUrl, {
        method: "GET",
        headers: { Authorization: `Bearer ${jwtToken}` },
      })

      if (response.ok) {
        const data = await response.json()
        const updatedData = data.products.map(product => ({
          id: product.id,
          title: product.title,
          brand: product.brand,
          imageUrl: product.image_url,
          rating: product.rating,
          price: product.price,
        }))
        setProductsList(updatedData)
      }
    }

    getProducts()
  }, [])

  const updateActiveOptionId = optionId => {
    setSortBy(optionId)
  }

  const sortProducts = (products, sortOrder) => {
    const sorted = [...products]
    if (sortOrder === 'PRICE_LOW') {
      sorted.sort((a, b) => a.price - b.price)
    } else if (sortOrder === 'PRICE_HIGH') {
      sorted.sort((a, b) => b.price - a.price)
    }
    return sorted
  }

  const finalProductsList =
    sortBy === '' ? productsList : sortProducts(productsList, sortBy)

  return (
    <div className="p-6">
      <ProductsHeader
        sortbyOptions={sortOptions}
        activeOptionId={sortBy}
        updateActiveOptionId={updateActiveOptionId}
      />
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {finalProductsList.map(product => (
          <ProductCard key={product.id} productData={product} />
        ))}
      </ul>
    </div>
  )
}

export default AllProductsSection
