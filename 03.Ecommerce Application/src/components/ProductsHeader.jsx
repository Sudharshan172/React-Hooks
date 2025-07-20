import { BsFilterRight } from 'react-icons/bs'

const ProductsHeader = ({
  sortbyOptions = [],
  activeOptionId = '',
  updateActiveOptionId = () => {},
}) => {
  const handleChange = event => {
    updateActiveOptionId(event.target.value)
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3 bg-white shadow rounded mb-4">
      <h1 className="text-xl font-bold text-gray-800 mb-2 sm:mb-0">All Products</h1>
      <div className="flex items-center gap-2">
        <BsFilterRight className="text-xl text-blue-600" />
        <label htmlFor="sortBy" className="text-gray-600 font-medium">Sort by</label>
        <select
          id="sortBy"
          value={activeOptionId}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="">Select</option>
          {sortbyOptions.map(option => (
            <option key={option.optionId} value={option.optionId}>
              {option.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default ProductsHeader
