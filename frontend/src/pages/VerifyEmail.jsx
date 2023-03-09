import { api } from '../helpers/api'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import FormContainer from '../components/FormContainer'

function VerifyEmail() {

    const [msg, setMsg] = useState('')
    const [err, setErr] = useState('')
    const [tru, setTru] = useState(false)

    const params = useParams()

    const Navigate = useNavigate()

    useEffect(() => {
      api.get(`/auth/register/verify/${params.token}`)
      .then((response) => {
          setMsg('Verefide Succefully, Redirecting to log in . . . . ')
          setTru(true)
      }).catch((err) => {
        setErr(err.response.data.message)
        setTru(false)
      })
    })
    
  return (
    <>
      <FormContainer>
        <div className="p-5 text-center">
          <div className='block' style={{ color: "#fff" }}>{ msg }</div>
          <div className='block' style={{ color: "red" }}>{ err }</div>
          <Link to="/login" className='text-color block'>login</Link>
        </div>
      </FormContainer>
      { tru && setTimeout(() => { Navigate('/login') }, 2000) }
    </>

  )
}

export default VerifyEmail