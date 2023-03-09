import { Navigate, Outlet } from 'react-router-dom'

function IsLoggedIn() {

    let isLoggedIn = false
    
    document.cookie ? isLoggedIn = true : isLoggedIn = false

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />

}

export default IsLoggedIn