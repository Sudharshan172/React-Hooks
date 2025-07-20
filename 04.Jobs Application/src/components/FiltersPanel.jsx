// src/components/FiltersPanel.jsx
const employmentTypes = ['FULLTIME', 'PARTTIME', 'FREELANCE', 'INTERNSHIP']
const salaryRanges = [1000000, 2000000, 3000000, 4000000]

const FiltersPanel = ({ onFilterChange }) => {
  return (
    <div>
      <h3 className="font-semibold mb-2">Type of Employment</h3>
      {employmentTypes.map(type => (
        <label key={type} className="block">
          <input type="checkbox" value={type} onChange={onFilterChange} />
          <span className="ml-2">{type}</span>
        </label>
      ))}
      <hr className="my-4" />
      <h3 className="font-semibold mb-2">Salary Range</h3>
      {salaryRanges.map(salary => (
        <label key={salary} className="block">
          <input type="radio" name="salary" value={salary} onChange={onFilterChange} />
          <span className="ml-2">{`>= ₹${salary}`}</span>
        </label>
      ))}
    </div>
  )
}

export default FiltersPanel
