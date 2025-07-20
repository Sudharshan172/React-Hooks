import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
const Home = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/jobs')
  }

  return (
    <>
    <Header/>
    <div className='w-full bg-cover bg-center h-screen'
      style={{ backgroundImage: "url('https://assets.ccbp.in/frontend/react-js/home-lg-bg.png')" }}>
      <div className="container mx-auto bg-cover bg-center h-screen text-white p-15"
         style={{ backgroundImage: "url('https://assets.ccbp.in/frontend/react-js/home-lg-bg.png')" }}>
      <div>
        <h1 className="text-5xl font-bold mb-5">Find the job That<br/> fits your skills</h1>
        <p className="text-xl mb-5">Millions of people are searching for jobs, salary<br/> information and company reviews. Find the job<br/> that fits with your skills.</p>
        <button
          onClick={handleClick}
          className="bg-blue-600 px-3 py-1 rounded cursor-pointer"
        >
          Find Job
        </button>
      </div>
    </div>

    </div>
    </>
  )
}

export default Home
