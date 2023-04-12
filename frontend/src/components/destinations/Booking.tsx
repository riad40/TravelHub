import { Input, Alert } from "../../components"
import InputValidator from "../../helpers/inputValidator"
import { useState } from "react"
import { Destination, BookingData } from "../../@types"
import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { makeBooking } from "../../services/destinations/requests"

const Booking = ({ destination }: { destination: Destination }) => {
    const [fullName, setFullName] = useState<BookingData["passangers"][0]["fullName"]>("")
    const [email, setEmail] = useState<BookingData["passangers"][0]["email"]>("")
    const [phone, setPhone] = useState<BookingData["passangers"][0]["phone"]>("")

    const [error, setError] = useState<string>("")
    const [success, setSuccess] = useState<string>("")

    const { auth } = useAuth()

    const navigate = useNavigate()

    // input validation
    const validateInputs = (): boolean => {
        if (!InputValidator.isAllInputsFilled([fullName, email, phone])) {
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

        const data: BookingData = {
            passangers: [{ fullName, email, phone }],
            destination: destination._id,
            user: auth.user.id,
        }

        const response = await makeBooking(auth.token, data)

        if (response?.response?.status == 400) {
            setError(response?.response?.data?.message)
            return
        }

        setError("")

        setSuccess(`${response.msg} Redirecting to Profile....`)

        setTimeout(() => {
            navigate("/profile")
        }, 2000)
    }

    return (
        <>
            <div className="border-t border-2 border-gray-900 w-2/4 mx-auto font-bold rounded-lg mt-7 mb-2"></div>
            <h3 className="text-gray-900 w-2/4 mx-auto text-xl font-bold">Tour Passanger Infos</h3>
            <form className="w-2/4 mx-auto" onSubmit={handleSubmit}>
                {error && <Alert content={error} success={false} />}
                {success && <Alert content={success} success={true} />}
                <Input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => {
                        setFullName(e.target.value)
                        setError("")
                    }}
                />
                <Input
                    type="text"
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
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => {
                        setPhone(e.target.value)
                        setError("")
                    }}
                />

                {/* <div className="flex justify-end">
                    <button className="text-gray-500 cursor-pointer"> + Add New Passanger</button>
                </div> */}

                <p className="text-gray-900 text-xl font-bold my-4">Total Price: ${destination.price}</p>

                <button type="submit" className="bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded">
                    Book Now
                </button>
            </form>
        </>
    )
}

export default Booking
