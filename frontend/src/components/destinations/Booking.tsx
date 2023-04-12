import { Destination } from "../../@types"
import { Input } from "../../components"

const Booking = () => {
    return (
        <>
            <div className="border-t border-2 border-gray-900 w-2/4 mx-auto font-bold rounded-lg mt-7 mb-2"></div>
            <h3 className="text-gray-900 w-2/4 mx-auto text-xl font-bold">Tour Passanger Infos</h3>
            <form className="w-2/4 mx-auto">
                <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
                <Input type="text" name="lastName" id="lastName" placeholder="Last Name" />
                <Input type="text" name="email" id="email" placeholder="Email" />
                <Input type="text" name="phone" id="phone" placeholder="Phone" />

                <div className="flex justify-end">
                    <span className="text-gray-500 cursor-pointer"> + Add New Passanger</span>
                </div>

                <div>
                    <div className="border-t border-2 border-gray-900 font-bold rounded-lg mt-5"></div>
                    <h3 className="text-gray-900 text-xl font-bold">Contat Infos</h3>
                    <Input type="text" name="fullName" id="fullName" placeholder="Full Name" />
                    <Input type="text" name="email" id="email" placeholder="Email" />
                    <Input type="text" name="confirmedEmail" id="confirmedEmail" placeholder="Confirme Email" />
                    <Input type="text" name="phone" id="phone" placeholder="Phone" />
                </div>

                <p className="text-gray-900 text-xl font-bold my-4">Total Price: $1000</p>

                <button type="submit" className="bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded">
                    Book Now
                </button>
            </form>
        </>
    )
}

export default Booking
