import { FormContainer, Input, NavBar, Footer } from "../components"
import { Link } from "react-router-dom"

const Login = (): JSX.Element => {
    return (
        <>
            <NavBar activeTab="login" />
            <FormContainer title="Login">
                <form className="flex flex-col gap-4 w-3/4 mx-auto">
                    <Input type="email" name="email" id="email" placeholder="Email" />
                    <Input type="password" name="password" id="password" placeholder="Password" />
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
