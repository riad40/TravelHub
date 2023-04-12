import { NavBar, Footer, UpdateInfos, Bookings, Loading } from "../../components"
import { useState, useRef, useEffect } from "react"
import useAuth from "../../hooks/useAuth"
import { getBookingsByUser } from "../../services/destinations/requests"

const Profile = (): JSX.Element => {
    const [activeTab, setActiveTab] = useState("updateInfos")
    const [loading, setLoading] = useState(true)
    const [bookings, setBookings] = useState([])

    const updateInfosRef = useRef<HTMLDivElement>(null)
    const bookingsRef = useRef<HTMLDivElement>(null)

    const handleTabClick = (tab: string) => {
        setActiveTab(tab)
        if (tab === "updateInfos") {
            updateInfosRef.current?.classList.remove("hidden")
            bookingsRef.current?.classList.add("hidden")
        } else {
            updateInfosRef.current?.classList.add("hidden")
            bookingsRef.current?.classList.remove("hidden")
        }
    }

    const { auth } = useAuth()

    useEffect(() => {
        const getBookings = async () => {
            const response = await getBookingsByUser(auth.token, auth.user.id)
            setBookings(response.data)
            setLoading(false)
        }

        getBookings()

        return () => {
            setBookings([])
        }
    }, [auth.token, auth.user.id])

    if (loading) return <Loading />

    return (
        <>
            <NavBar activeTab="profile" />

            <div className="w-2/4 mx-auto mt-20 border border-gray-600 rounded p-4 shadow flex justify-between">
                <button className={`bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline ${activeTab === "updateInfos" ? "mr-2" : "mr-2 opacity-80"}`} type="button" onClick={() => handleTabClick("updateInfos")}>
                    Update Informations
                </button>
                <button className={`bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline ${activeTab === "bookings" ? "mr-2" : "mr-2 opacity-80"}`} type="button" onClick={() => handleTabClick("bookings")}>
                    My Bookings
                </button>
            </div>

            <div ref={updateInfosRef}>
                <UpdateInfos />
            </div>

            <div className="hidden" ref={bookingsRef}>
                <Bookings bookings={bookings} />
            </div>

            <Footer />
        </>
    )
}

export default Profile
