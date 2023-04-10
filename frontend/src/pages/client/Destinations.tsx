import { NavBar, Footer, DestinationCard } from "../../components"
import { Destination } from "../../@types"

const Destinations = (): JSX.Element => {
    return (
        <>
            <NavBar activeTab="destinations" />

            <div className="w-3/4 mx-auto flex justify-between items-center mt-10 mb-5">
                <div className="flex flex-col mt-4 w-1/4 px-4">
                    <div className="flex flex-col mt-2">
                        <input type="text" name="search" id="search" placeholder="Search by title" className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-400" />
                    </div>
                </div>
                <div className="flex flex-col mt-4 w-1/4 px-4">
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <span className="text-gray-500">0</span>
                            <h1 className="text-center text-gray-500">Filter By Price</h1>
                            <span className="text-gray-500">1000</span>
                        </div>
                        <input type="range" name="price" id="price" className="w-full" />
                    </div>
                </div>
                <div className="flex flex-col mt-4 w-1/4 px-4">
                    <h1 className="text-center text-gray-500">Filter by Location</h1>
                    <div className="flex flex-col mt-2">
                        <select name="countries" id="countries" className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-400">
                            <option value="all">All</option>
                            <option value="usa">USA</option>
                            <option value="canada">Canada</option>
                            <option value="mexico">Mexico</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-col mt-4 w-1/4 px-4">
                    <h1 className="text-center text-gray-500">Filter By Climate</h1>
                    <div className="flex flex-col mt-2">
                        <select name="countries" id="countries" className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-400">
                            <option value="usa">Rainy</option>
                            <option value="canada">Sunny</option>
                            <option value="mexico">Snowy</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-3/4 mx-auto relative">
                <DestinationCard destination={{} as Destination} />
                <DestinationCard destination={{} as Destination} />
                <DestinationCard destination={{} as Destination} />
                <DestinationCard destination={{} as Destination} />
            </div>

            <div className="flex justify-center items-center my-10">
                <div className="flex items-center">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">Prev</button>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">Next</button>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Destinations
