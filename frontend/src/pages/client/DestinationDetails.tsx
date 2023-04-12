import { NavBar, Footer } from "../../components"
import { useState, useRef } from "react"
import { GeneralDetails, Itenary, Galleries, Booking } from "../../components"

const DestinationDetails = () => {
    const [activeTab, setActiveTab] = useState("general")

    const generalRef = useRef<HTMLDivElement>(null)

    const itenaryRef = useRef<HTMLDivElement>(null)

    const galleryRef = useRef<HTMLDivElement>(null)

    const bookNowRef = useRef<HTMLDivElement>(null)

    const handleTabChange = (tab: string) => {
        setActiveTab(tab)
    }

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
                <Booking />
            </div>

            <Footer />
        </>
    )
}

export default DestinationDetails
