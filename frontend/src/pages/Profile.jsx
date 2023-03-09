import { useState, useEffect } from 'react'
import { api } from '../helpers/api'
import FormContainer from '../components/FormContainer'
import { useNavigate } from 'react-router-dom'

function Profile() {

  const [me, setMe] = useState('')
  const [err, setErr] = useState('')
  const Navigate = useNavigate()

  const role = localStorage.getItem('role')
  
  const logout = () => {
    api.get(`/auth/logout`, {
      withCredentials: true
    }).then((response) => {
        Navigate('/')
        localStorage.clear()
      })
      .catch((error) => {
        setErr(error.response?.data?.message)
      })
  }

  useEffect(() => {
    if(role === null || undefined) {
      logout()
    }
    api.get(`/user/${role}/me`, {
      headers: {'set-cookie': document.cookie},
      withCredentials: true
    }).then((response) => {
        setMe(response.data.message)
      })
      .catch((err) => {
        setErr(err.response.data.message)
        logout()
      })
  })
    
  return (
    <FormContainer>
      <div className="text-white text-center">
        <h1>{ !err && me }</h1>
        <p className='text-red-200'>{ err }</p>
        <button className='text-color' onClick={ logout }>Log Out</button>
      </div>
    </FormContainer>
  )
}

export default Profile