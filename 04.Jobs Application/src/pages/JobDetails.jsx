// src/pages/JobDetails.jsx
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from '../components/Header'

const JobDetails = () => {
  const { id } = useParams()
  const [job, setJob] = useState(null)

  useEffect(() => {
    const fetchJobDetails = async () => {
      const res = await fetch(`https://apis.ccbp.in/jobs/${id}`, {
        headers: {
          Authorization: `Bearer ${document.cookie.split('jwt_token=')[1]}`,
        },
      })
      const data = await res.json()
      setJob(data.job_details)
    }
    fetchJobDetails()
  }, [id])

  return job ? (
    <>
    <Header/>
    <div className="container mx-auto p-6 min-h-screen text-white bg-[#000000]">
      <div className="flex items-center">
        <img src={job.company_logo_url} alt="logo" className="w-16 mr-4" />
        <div>
          <h2 className="text-2xl font-semibold">{job.title}</h2>
          <p>{job.rating}⭐ | {job.employment_type}</p>
        </div>
      </div>
      <p className="mb-4">{job.job_description}</p>

      <div className="mb-4">
        <h3 className="font-bold text-xl mb-5">Skills</h3>
        <div className="flex flex-wrap gap-12 mt-2">
          {job.skills.map(skill => (
            <div key={skill.name} className="flex items-center gap-2">
              <img src={skill.image_url} alt={skill.name} className="w-20 h-20" />
              <span className='text-2xl'>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <h1 className="font-bold text-xl mb-4">Life at Company</h1>
        <div className="flex flex-col lg:flex-row gap-6 items-start mb-6">
        <p className="text-gray-200 leading-relaxed lg:max-w-[75%]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi natus esse eius fugit officiis maiores minus, cupiditate iusto. Cum quidem necessitatibus veritatis illum? Vel architecto, optio nam quas quia unde?
            Sit, dignissimos? Consequatur aspernatur quibusdam dolorum iusto, neque aliquid sapiente? Reprehenderit ut, quas hic excepturi soluta sint rem fugit, sit voluptate repudiandae, voluptatibus optio! Laboriosam nisi facilis mollitia nemo quos.
            Ut perspiciatis libero tempore fugiat. Et quos quidem perspiciatis impedit modi placeat magni. Dolor praesentium facilis explicabo, consequatur exercitationem obcaecati consectetur blanditiis cum hic et expedita, quis sunt doloribus cupiditate.
            Suscipit ab ullam id beatae illo molestiae nam quo numquam quas magni pariatur qui est amet deserunt ad, accusantium sequi recusandae tempore modi. Delectus quos ducimus unde, ad eum architecto!
        </p>
        <img
            src={job.life_at_company.image_url}
            alt="life at company"
            className="rounded w-full lg:w-[25%] object-cover"
        />
        </div>


      <a href={job.company_website_url} className="text-blue-600 cursor-pointer" target="_blank">
        Visit Company Site
      </a>
    </div>
    </>
  ) : (
    <p className="p-6">Loading job details...</p>
  )
}

export default JobDetails
