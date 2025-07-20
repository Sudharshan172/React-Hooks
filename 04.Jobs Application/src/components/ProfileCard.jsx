// src/components/ProfileCard.jsx
import { useEffect, useState } from 'react'

const ProfileCard = () => {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch('https://apis.ccbp.in/profile', {
        headers: {
          Authorization: `Bearer ${document.cookie.split('jwt_token=')[1]}`,
        },
      })
      const data = await res.json()
      setProfile(data.profile_details)
    }

    fetchProfile()
  }, [])

  return profile ? (
    <div className="top-4 bg-white p-4 rounded shadow mb-4">
      <img src={profile.profile_image_url} alt="profile" className="w-20 rounded-full mx-auto mb-2" />
      <h2 className="text-center font-semibold text-black">Sudharshan Reddy</h2>
      <p className="text-center text-gray-600 text-sm">Fullstack Developer</p>
    </div>
  ) : (
    <p>Loading profile...</p>
  )
}

export default ProfileCard
