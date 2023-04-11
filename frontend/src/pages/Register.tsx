import { FormContainer, Input, NavBar, Footer, Alert } from "../components"
import { Link, useNavigate } from "react-router-dom"
import { register } from "../services/auth/requests"
import InputValidator from "../helpers/inputValidator"
import { useState } from "react"

const Register = (): JSX.Element => {
    const [username, setUsername] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [success, setSuccess] = useState<string>("")

    const navigate = useNavigate()

    // input validation
    const validateInputs = (): boolean => {
        if (!InputValidator.isAllInputsFilled([username, email, password])) {
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

        const response = await register(username, email, password)

        console.log(response)

        if (response?.response?.status == 400) {
            setError(response?.response?.data?.message)
            return
        }

        setSuccess(`${response.message} Redirecting to login....`)
        setError("")
        setTimeout(() => {
            navigate("/login")
        }, 3000)
    }

    return (
        <>
            <NavBar activeTab="register" />
            <FormContainer title="Register">
                {error && <Alert content={error} success={false} />}
                {success && <Alert content={success} success={true} />}
                <form className="flex flex-col gap-4 w-3/4 mx-auto" onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                            setError("")
                        }}
                    />
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
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setError("")
                        }}
                    />
                    <button className="bg-indigo-500 text-white px-4 py-2 rounded">Register</button>
                    <p className="text-center">
                        Already have an account ? {` `}
                        <Link to="/login" className="text-indigo-500">
                            Login
                        </Link>
                    </p>
                </form>
            </FormContainer>
            <Footer />
        </>
    )
}

export default Register
