import { Loading } from "../../components"
import { useState, useEffect } from "react"
import { getDestinationDetails, getDestinationReviews, getDestination } from "../../services/destinations/requests"
import { DestinationDetails, Review, Destination, User } from "../../@types"
import useAuth from "../../hooks/useAuth"
import { useParams } from "react-router-dom"

const GeneralDetails = (): JSX.Element => {
    const [destination, setDestination] = useState<Destination>()
    const [destinationDetails, setDestinationDetails] = useState<DestinationDetails>()
    const [destinationReviews, setDestinationReviews] = useState<Review[]>()
    const [loading, setLoading] = useState<boolean>(true)

    const { auth } = useAuth()
    const { id } = useParams<{ id: string }>()

    useEffect(() => {
        const getDestinationDetailsAndReviews = async () => {
            const destination = await getDestination(auth?.token, id as string)
            const destinationDetails = await getDestinationDetails(auth?.token, id as string)
            const destinationReviews = await getDestinationReviews(auth?.token, id as string)
            setDestination(destination)
            setDestinationDetails(destinationDetails)
            setDestinationReviews(destinationReviews)
            setLoading(false)
        }
        getDestinationDetailsAndReviews()

        return () => {
            setDestinationDetails(undefined)
            setDestinationReviews(undefined)
            setDestination(undefined)
        }
    }, [])

    if (loading) return <Loading />

    return (
        <>
            <div className="w-full flex justify-between items-center border border-gray-300 p-5 mb-5 text-gray-500 rounded">
                <div className="flex flex-col w-full">
                    <h1 className="text-2xl">{destination?.name}</h1>
                    <p className="text-sm">{destination?.description}</p>
                    <div className="flex justify-between items-center border-t border-gray-300 mt-5 pt-5 w-full">
                        <div className="flex flex-col items-center">
                            <h1 className="text-l text-gray-900">Location</h1>
                            <p className="text-sm">{destination?.location}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-l text-gray-900">Starting Point</h1>
                            <p className="text-sm">{destinationDetails?.starting_point}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-l text-gray-900">Departure Date</h1>
                            <p className="text-sm">{destinationDetails?.start_date?.split("T")[0]}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-l text-gray-900">Return Date</h1>
                            <p className="text-sm"> {destinationDetails?.end_date?.split("T")[0]}</p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-2xl text-gray-900 mb-5 text-center"> Reviews </h1>
            <div className="w-full flex justify-between items-center border border-gray-300 p-5 mb-5 text-gray-500 rounded flex-wrap">
                {destinationReviews?.length === 0 && (
                    <div className="bg-gray-300 rounded p-5 mr-5 w-3/12 min-w-1/12">
                        <h1 className="text-xl text-gray-900">No reviews yet</h1>
                    </div>
                )}
                {destinationReviews?.map((review) => (
                    <div className="bg-gray-300 rounded p-5 mr-5 w-3/12 min-w-1/12">
                        <h1 className="text-xl text-gray-900">{review.user?.username}</h1>
                        <p className="text-sm text-gray-500">{review.comment}</p>
                        <div className="flex justify-between items-center border-t border-gray-300 mt-2 pt-5">
                            <div className="flex flex-col">
                                <h1 className="text-l text-gray-900">Rating</h1>
                                <p className="text-sm">{review.rating}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default GeneralDetails
