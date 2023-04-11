import { Destination } from "../../@types"

const GeneralDetails = ({ destination }: { destination: Destination }): JSX.Element => {
    return (
        <>
            <div className="w-full flex justify-between items-center border border-gray-300 p-5 mb-5 text-gray-500 rounded">
                <div className="flex flex-col">
                    <h1 className="text-2xl">Tour Name</h1>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nulla vitae rem libero rerum ad laudantium? Officia autem, quas id velit illo iste laboriosam est labore debitis praesentium repudiandae odio.</p>
                    <div className="flex justify-between items-center border-t border-gray-300 mt-5 pt-5">
                        <div className="flex flex-col items-center">
                            <h1 className="text-l text-gray-900">Location</h1>
                            <p className="text-sm">Morocco</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-l text-gray-900">Departure Date</h1>
                            <p className="text-sm">12/12/2021</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-l text-gray-900">Return Date</h1>
                            <p className="text-sm">12/12/2021</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-l text-gray-900">Price</h1>
                            <p className="text-sm">$1000</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-start border-t border-gray-300 mt-5 pt-5">
                        <div className="flex flex-col items-center">
                            <h1 className="text-l text-gray-900">Starting Point</h1>
                            <p className="text-sm"> Rainy</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-l text-gray-900">Climate</h1>
                            <p className="text-sm">Rainy</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-l text-gray-900">Inclusions</h1>
                            <p className="text-sm">
                                <ul>
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                    <li>Item 3</li>
                                </ul>
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-l text-gray-900">exclusions</h1>
                            <p className="text-sm">
                                <ul>
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                    <li>Item 3</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-2xl text-gray-900 mb-5 text-center"> Reviews </h1>
            <div className="w-full flex justify-between items-center border border-gray-300 p-5 mb-5 text-gray-500 rounded flex-wrap">
                <div className="bg-gray-300 rounded p-5 mr-5 w-3/12 min-w-1/12">
                    <h1 className="text-xl text-gray-900">User Name</h1>
                    <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nulla vitae rem libero rerum ad laudantium? Officia autem, quas id velit illo iste laboriosam est labore debitis praesentium repudiandae odio.</p>
                    <div className="flex justify-between items-center border-t border-gray-300 mt-2 pt-5">
                        <div className="flex flex-col">
                            <h1 className="text-l text-gray-900">Rating</h1>
                            <p className="text-sm">4.5</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-300 rounded p-5 mr-5 w-3/12 min-w-1/12">
                    <h1 className="text-xl text-gray-900">User Name</h1>
                    <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nulla vitae rem libero rerum ad laudantium? Officia autem, quas id velit illo iste laboriosam est labore debitis praesentium repudiandae odio.</p>
                    <div className="flex justify-between items-center border-t border-gray-300 mt-2 pt-5">
                        <div className="flex flex-col">
                            <h1 className="text-l text-gray-900">Rating</h1>
                            <p className="text-sm">4.5</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-300 rounded p-5 mr-5 w-3/12 min-w-1/12">
                    <h1 className="text-xl text-gray-900">User Name</h1>
                    <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nulla vitae rem libero rerum ad laudantium? Officia autem, quas id velit illo iste laboriosam est labore debitis praesentium repudiandae odio.</p>
                    <div className="flex justify-between items-center border-t border-gray-300 mt-2 pt-5">
                        <div className="flex flex-col">
                            <h1 className="text-l text-gray-900">Rating</h1>
                            <p className="text-sm">4.5</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GeneralDetails
