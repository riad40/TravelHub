import { Input } from "../../components"
import useAuth from "../../hooks/useAuth"

const UpdateInfos = (): JSX.Element => {
    const { auth } = useAuth()

    return (
        <div className="w-2/4 mx-auto my-20 border border-gray-600 rounded p-4">
            <h1 className="text-2xl font-bold text-center">User Personal Informations</h1>
            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <Input id="username" type="text" placeholder="Username" value={auth.user.username} />
            </div>
            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <Input id="email" type="email" placeholder="Email" value={auth.user.email} />
            </div>
            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <Input id="password" type="password" placeholder="Password" value="**********" />
            </div>
            <div className="mt-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                    Confirm Password
                </label>
                <Input id="confirmPassword" type="password" placeholder="Confirm Password" value="**********" />
            </div>
            <div className="mt-4">
                <button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Update Profile
                </button>
            </div>
        </div>
    )
}

export default UpdateInfos
