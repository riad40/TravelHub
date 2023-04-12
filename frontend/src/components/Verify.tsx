import { Link, useParams } from "react-router-dom"
import { verifyEmail } from "../services/auth/requests"
import { useEffect } from "react"

const Verify = (): JSX.Element => {
    const { token } = useParams<{ token: string }>()

    useEffect(() => {
        const verify = async () => {
            await verifyEmail(token as string)
        }

        verify()
    }, [token])

    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div className="px-40 py-20 bg-white rounded-md shadow-xl">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-blue-600 text-9xl">Email Verified</h1>

                    <Link to="/login" className="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100">
                        Go Login
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Verify
