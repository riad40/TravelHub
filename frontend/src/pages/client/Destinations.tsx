import { NavBar, Footer, DestinationCard, Loading } from "../../components"
import { Destination } from "../../@types"
import { getDestinations } from "../../services/destinations/requests"
import { useEffect, useState } from "react"
import useAuth from "../../hooks/useAuth"

const Destinations = (): JSX.Element => {
    const [destinations, setDestinations] = useState<Destination[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const { auth } = useAuth()

    const fetchDestinations = async () => {
        const destinations = await getDestinations(auth.token)
        setDestinations(destinations)
        setLoading(false)
    }
    useEffect(() => {
        fetchDestinations()

        return () => {
            setDestinations([])
        }
    }, [])

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        const filteredDestinations = destinations.filter((destination) => destination.name.toLowerCase().includes(value.toLowerCase()))
        setDestinations(filteredDestinations)

        if (value.length === 0) {
            fetchDestinations()
        }
    }

    if (loading) return <Loading />

    return (
        <>
            <NavBar activeTab="destinations" />

            <div className="w-3/4 mx-auto flex justify-center items-center mt-10 mb-5">
                <div className="flex flex-col mt-4 w-full px-4">
                    <div className="flex flex-col mt-2">
                        <input type="text" name="search" id="search" placeholder="Search by title" className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-400" onChange={handleFilterChange} />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-3/4 mx-auto relative">
                {destinations.map((destination) => (
                    <DestinationCard key={destination?._id} destination={destination} />
                ))}
            </div>

            <div className="fixed bottom-0 w-full">
                <Footer />
            </div>
        </>
    )
}

export default Destinations
