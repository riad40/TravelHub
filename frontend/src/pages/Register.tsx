import { FormContainer, Input, NavBar, Footer } from "../components"
import { Link } from "react-router-dom"

const Register = (): JSX.Element => {
    return (
        <>
            <NavBar activeTab="register" />
            <FormContainer title="Register">
                <form className="flex flex-col gap-4 w-3/4 mx-auto">
                    <Input type="text" name="username" id="username" placeholder="Username" />
                    <Input type="email" name="email" id="email" placeholder="Email" />
                    <Input type="password" name="password" id="password" placeholder="Password" />
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
