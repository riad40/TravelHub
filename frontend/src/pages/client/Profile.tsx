import { NavBar, Footer, UpdateInfos, Bookings } from "../../components"
import { useState, useRef } from "react"

const Profile = (): JSX.Element => {
    const [activeTab, setActiveTab] = useState("updateInfos")

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
                <Bookings />
            </div>

            <Footer />
        </>
    )
}

export default Profile
