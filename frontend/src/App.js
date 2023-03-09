import { Home, Login, Profile, Register, VerifyEmail, ForgetPassword, ResetPassword, NotFound } from './pages/index'
import IsLoggedIn from './components/IsLoggedIn' 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { inputs, inputs1, inputs2, inputs3} from './helpers/inputs' 

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={ <Login inputs={ inputs } /> } />
          <Route path="/register" element={ <Register inputs={ inputs1 } /> } />
          <Route path="/verify/:token" element={ <VerifyEmail /> } />
          <Route element={ <IsLoggedIn /> }>
            <Route path='/profile' element={ <Profile /> } />
          </Route>
          <Route path="/forgetpassword" element={ <ForgetPassword inputs={ inputs2 } /> } />
          <Route path='/resetpassword/:token' element={ <ResetPassword inputs={ inputs3 } /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
      </Router>
    </>
  )
}

export default App