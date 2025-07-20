// src/components/JobCard.jsx
import { Link } from 'react-router-dom'

const JobCard = ({ job }) => {
  return (
    <Link to={`/jobs/${job.id}`} className="border p-4 rounded mb-4 block hover:shadow bg-[#262626]">
      <div className="flex items-center mb-2">
        <img src={job.company_logo_url} alt="logo" className="w-12 h-12 mr-4" />
        <div>
          <h3 className="font-semibold">{job.title}</h3>
          <p className="text-sm text-gray-600">{job.rating}⭐ | {job.employment_type}</p>
        </div>
      </div>
      <p>{job.job_description.slice(0, 100)}...</p>
      <div className="flex justify-between text-sm text-gray-500 mt-2">
        <span>{job.location}</span>
        <span>{job.package_per_annum}</span>
      </div>
    </Link>
  )
}

export default JobCard
