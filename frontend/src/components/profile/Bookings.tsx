const Bookings = (): JSX.Element => {
    return (
        <div className="w-2/4 mx-auto my-20 rounded p-4">
            <h1 className="text-2xl font-bold text-center">My Bookings</h1>
            <div className="mt-4">
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">Destination</th>
                            <th className="px-4 py-2 border">Starting Point</th>
                            <th className="px-4 py-2 border">Departure Date</th>
                            <th className="px-4 py-2 border">Return Date</th>
                            <th className="px-4 py-2 border">Price</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <td className="border px-4 py-2">Paris</td>
                            <td className="border px-4 py-2">Lyon</td>
                            <td className="border px-4 py-2">2021-01-01</td>
                            <td className="border px-4 py-2">2021-01-05</td>
                            <td className="border px-4 py-2">500€</td>
                            <td className="border px-4 py-2">
                                <button className="bg-red-600 hover:bg-red-700 text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Cancel
                                </button>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td className="border px-4 py-2">Paris</td>
                            <td className="border px-4 py-2">Lyon</td>
                            <td className="border px-4 py-2">2021-01-01</td>
                            <td className="border px-4 py-2">2021-01-05</td>
                            <td className="border px-4 py-2">500€</td>
                            <td className="border px-4 py-2">
                                <button className="bg-red-600 hover:bg-red-700 text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Cancel
                                </button>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td className="border px-4 py-2">Paris</td>
                            <td className="border px-4 py-2">Lyon</td>
                            <td className="border px-4 py-2">2021-01-01</td>
                            <td className="border px-4 py-2">2021-01-05</td>
                            <td className="border px-4 py-2">500€</td>
                            <td className="border px-4 py-2">
                                <button className="bg-red-600 hover:bg-red-700 text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Cancel
                                </button>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td className="border px-4 py-2">Paris</td>
                            <td className="border px-4 py-2">Lyon</td>
                            <td className="border px-4 py-2">2021-01-01</td>
                            <td className="border px-4 py-2">2021-01-05</td>
                            <td className="border px-4 py-2">500€</td>
                            <td className="border px-4 py-2">
                                <button className="bg-red-600 hover:bg-red-700 text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Cancel
                                </button>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td className="border px-4 py-2">Paris</td>
                            <td className="border px-4 py-2">Lyon</td>
                            <td className="border px-4 py-2">2021-01-01</td>
                            <td className="border px-4 py-2">2021-01-05</td>
                            <td className="border px-4 py-2">500€</td>
                            <td className="border px-4 py-2">
                                <button className="bg-red-600 hover:bg-red-700 text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Cancel
                                </button>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td className="border px-4 py-2">Paris</td>
                            <td className="border px-4 py-2">Lyon</td>
                            <td className="border px-4 py-2">2021-01-01</td>
                            <td className="border px-4 py-2">2021-01-05</td>
                            <td className="border px-4 py-2">500€</td>
                            <td className="border px-4 py-2">
                                <button className="bg-red-600 hover:bg-red-700 text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Cancel
                                </button>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td className="border px-4 py-2">Paris</td>
                            <td className="border px-4 py-2">Lyon</td>
                            <td className="border px-4 py-2">2021-01-01</td>
                            <td className="border px-4 py-2">2021-01-05</td>
                            <td className="border px-4 py-2">500€</td>
                            <td className="border px-4 py-2">
                                <button className="bg-red-600 hover:bg-red-700 text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Cancel
                                </button>
                            </td>
                        </tr>
                        <tr className="text-center">
                            <td className="border px-4 py-2">Paris</td>
                            <td className="border px-4 py-2">Lyon</td>
                            <td className="border px-4 py-2">2021-01-01</td>
                            <td className="border px-4 py-2">2021-01-05</td>
                            <td className="border px-4 py-2">500€</td>
                            <td className="border px-4 py-2">
                                <button className="bg-red-600 hover:bg-red-700 text-white py-1 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                    Cancel
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Bookings
