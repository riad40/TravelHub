import { FormContainer, Input, NavBar, Footer, Alert } from "../components"
import { Link, useNavigate } from "react-router-dom"
import { login } from "../services/auth/requests"
import useAuth from "../hooks/useAuth"
import InputValidator from "../helpers/inputValidator"
import { useState } from "react"

const Login = (): JSX.Element => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [success, setSuccess] = useState<string>("")

    const { dispatch } = useAuth()
    const navigate = useNavigate()

    // input validation
    const validateInputs = (): boolean => {
        if (!InputValidator.isAllInputsFilled([email, password])) {
            setError("All the fileds are required")
            return false
        }

        if (!InputValidator.isEmailValid(email)) {
            setError("Email Invalid")
            return false
        }
        return true
    }

    // handle submit
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!validateInputs()) return

        const response = await login(email, password)

        if (response?.response?.status == 400) {
            setError(response?.response?.data?.message)
            return
        }

        const { token, user } = response

        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))

        dispatch({ type: "SET_AUTH", payload: { token, user } })

        setError("")

        setSuccess(`${response.message} Redirecting to dashboard....`)
        navigate("/profile")
    }

    return (
        <>
            <NavBar activeTab="login" />
            <FormContainer title="Login">
                {error && <Alert content={error} success={false} />}
                {success && <Alert content={success} success={true} />}
                <form className="flex flex-col gap-4 w-3/4 mx-auto" onSubmit={handleSubmit}>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            setError("")
                        }}
                    />
                    <Input
                        type="password"
                        name="passwored"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setError("")
                        }}
                    />
                    <button className="bg-indigo-500 text-white px-4 py-2 rounded">Login</button>
                    <p className="text-center">
                        Don't have an account ? {` `}
                        <Link to="/register" className="text-indigo-500">
                            Register
                        </Link>
                    </p>
                </form>
            </FormContainer>
            <Footer />
        </>
    )
}

export default Login
