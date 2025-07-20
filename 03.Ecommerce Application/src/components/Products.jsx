import Header from './Header'
import AllProductsSection from './AllProductsSection'
import PrimeDealsSection from './PrimeDealsSection'

export default function Products() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 p-6">
        <PrimeDealsSection/>
        <AllProductsSection />
    </div>
    </>
  )
}
