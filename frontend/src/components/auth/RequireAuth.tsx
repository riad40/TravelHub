import useAuth from "../../hooks/useAuth"
import { Navigate, Outlet } from "react-router-dom"
import { NotFound } from "../../components"

const RequireAuth = ({ roles }: { roles: string[] }): JSX.Element => {
    const { auth } = useAuth()

    const userRoles = auth?.user?.roles

    // check if token exist
    if (!auth?.token) {
        return <Navigate to="/login" />
    }

    // check if the user has the required role
    if (roles && !roles.some((role) => userRoles?.includes(role))) {
        return <NotFound />
    }

    return <Outlet />
}

export default RequireAuth
