import useAuth from "../../hooks/useAuth"
import { cancelBooking } from "../../services/destinations/requests"
import { useState } from "react"

const Bookings = ({ bookings }: { bookings: any }): JSX.Element => {
    const [bookingsList, setBookingsList] = useState(bookings)

    const { auth } = useAuth()

    const handleCancelBooking = async (id: string) => {
        await cancelBooking(auth.token, id)
        const updatedBookings = bookingsList.filter((booking: any) => booking._id !== id)
        setBookingsList(updatedBookings)
    }

    return (
        <div className="w-2/4 mx-auto my-20 rounded p-4">
            <h1 className="text-2xl font-bold text-center">My Bookings</h1>
            <div className="mt-4">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">Destination</th>
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Price</th>
                            <th className="px-4 py-2 border">Status</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingsList.map((booking: any) => (
                            <tr className="text-center" key={booking.id}>
                                <td className="border px-4 py-2">{booking.destination.location}</td>
                                <td className="border px-4 py-2">{booking.destination.name}</td>
                                <td className="border px-4 py-2">{booking.destination.price}€</td>
                                <td className="border px-4 py-2">{booking.status}</td>
                                <td className="border px-4 py-2 flex justify-between">
                                    <button className="bg-red-600 hover:bg-red-700 text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={() => handleCancelBooking(booking._id)}>
                                        Cancel
                                    </button>

                                    <button className="bg-green-600 hover:bg-green-700 text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                        Review
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Bookings
