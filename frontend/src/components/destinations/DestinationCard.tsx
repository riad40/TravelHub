import { Destination } from "../../@types"
import { Link } from "react-router-dom"
import readImage from "../../helpers/readImage"

const DestinationCard = ({ destination }: { destination: Destination }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow my-5">
            <div className="relative flex items-center justify-center">
                <img className="rounded-t-lg" src={readImage(destination.image)} alt="destination image" />
                <div className="absolute flex flex-col justify-end w-full h-full to-transparent p-5">
                    <p className="text-2xl font-semibold text-white">from ${destination.price}</p>
                </div>
            </div>
            <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-700">{destination.name}</h3>
                <p className="text-gray-600">{destination.description}</p>
                <Link to={`/destinations/${destination._id}`} className="block w-full px-4 py-2 mt-4 text-sm font-medium text-center text-white bg-blue-400 border border-transparent rounded-lg hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
                    View Details
                </Link>
            </div>
        </div>
    )
}

export default DestinationCard
