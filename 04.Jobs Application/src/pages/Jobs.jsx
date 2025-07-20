// src/pages/Jobs.jsx
import { useState, useEffect } from 'react'
import ProfileCard from '../components/ProfileCard'
import FiltersPanel from '../components/FiltersPanel'
import JobCard from '../components/JobCard'
import Header from '../components/Header.jsx'


const Jobs = () => {
  const [jobs, setJobs] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTypes, setSelectedTypes] = useState([])
  const [selectedSalary, setSelectedSalary] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const getJobs = async () => {
    setIsLoading(true)
    const types = selectedTypes.join(',')
    const apiUrl = `https://apis.ccbp.in/jobs?employment_type=${types}&minimum_package=${selectedSalary}&search=${searchTerm}`
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${document.cookie.split('jwt_token=')[1]}`,
      },
    })
    const data = await response.json()
    setJobs(data.jobs || [])
    setIsLoading(false)
  }

  useEffect(() => {
    getJobs()
  }, [selectedTypes, selectedSalary, searchTerm])

  const handleFilterChange = e => {
    const { type, value, checked } = e.target
    if (type === 'checkbox') {
      setSelectedTypes(prev =>
        checked ? [...prev, value] : prev.filter(item => item !== value)
      )
    } else {
      setSelectedSalary(value)
    }
  }

  const handleSearch = e => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
    <Header/>
    <div className="container mx-auto flex px-4 py-6 bg-[#000000] min-h-screen text-white">
      {/* Left sidebar */}
      <div className="w-1/4 pr-4">
        <ProfileCard />
        <FiltersPanel onFilterChange={handleFilterChange} />
      </div>

      {/* Right content */}
      <div className="w-3/4">
        <input
          type="text"
          placeholder="Search job title..."
          value={searchTerm}
          onChange={handleSearch}
          className="border p-2 w-full mb-4"
        />
        {isLoading ? (
          <p>Loading jobs...</p>
        ) : jobs.length > 0 ? (
          jobs.map(job => <JobCard key={job.id} job={job} />)
        ) : (
          <div>
            <img
            src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
            alt="no jobs"
            className="mx-auto mt-8"
          />
          <h1 className='text-center text-3xl font-bold mt-2'>No Jobs Found</h1>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default Jobs
