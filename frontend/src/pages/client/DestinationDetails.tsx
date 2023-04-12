import { NavBar, Footer, Loading } from "../../components"
import { useState, useRef, useEffect } from "react"
import { GeneralDetails, Itenary, Galleries, Booking } from "../../components"
import { Destination } from "../../@types"
import useAuth from "../../hooks/useAuth"
import { getDestination } from "../../services/destinations/requests"
import { useParams } from "react-router-dom"

const DestinationDetails = () => {
    const [activeTab, setActiveTab] = useState("general")
    const [destination, setDestination] = useState<Destination>()
    const [loading, setLoading] = useState(true)

    const generalRef = useRef<HTMLDivElement>(null)

    const itenaryRef = useRef<HTMLDivElement>(null)

    const galleryRef = useRef<HTMLDivElement>(null)

    const bookNowRef = useRef<HTMLDivElement>(null)

    const handleTabChange = (tab: string) => {
        setActiveTab(tab)
    }

    const { id } = useParams<{ id: string }>()

    const { auth } = useAuth()

    useEffect(() => {
        const getDestinationDetails = async () => {
            const response = await getDestination(auth.token, id as string)
            setDestination(response)
            setLoading(false)
        }

        getDestinationDetails()

        return () => {
            setDestination(undefined)
        }
    }, [id, auth.token])

    if (loading) return <Loading />

    return (
        <>
            <NavBar activeTab="destinations" />
            <div className="w-3/4 mx-auto flex justify-between items-center mt-10 mb-5">
                <button className={activeTab === "general" ? "bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" : "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"} onClick={() => handleTabChange("general")}>
                    General Details
                </button>
                <button className={activeTab === "itenary" ? "bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" : "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"} onClick={() => handleTabChange("itenary")}>
                    Itenary
                </button>
                <button className={activeTab === "gallery" ? "bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" : "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"} onClick={() => handleTabChange("gallery")}>
                    Gallery
                </button>

                <button className={activeTab === "bookNow" ? "bg-blue-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" : "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"} onClick={() => handleTabChange("bookNow")}>
                    Book Now
                </button>
            </div>

            <div ref={generalRef} className={activeTab === "general" ? "block w-3/4 mx-auto" : "hidden"}>
                <GeneralDetails />
            </div>

            <div ref={itenaryRef} className={activeTab === "itenary" ? "block w-3/4 mx-auto" : "hidden"}>
                <Itenary />
            </div>

            <div ref={galleryRef} className={activeTab === "gallery" ? "block w-3/4 mx-auto" : "hidden"}>
                <Galleries />
            </div>

            <div ref={bookNowRef} className={activeTab === "bookNow" ? "block w-3/4 mx-auto" : "hidden"}>
                <Booking destination={destination as Destination} />
            </div>

            <Footer />
        </>
    )
}

export default DestinationDetails
