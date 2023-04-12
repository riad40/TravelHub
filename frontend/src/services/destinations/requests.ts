import api from "../../configs/api"
import { BookingData } from "../../@types"

// get destinations
const getDestinations = async (token: string) => {
    try {
        const { data } = await api.get("/destinations", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return data
    } catch (error) {
        console.log(error)
    }
}

// get one destination
const getDestination = async (token: string, id: string) => {
    try {
        const { data } = await api.get(`/destinations/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return data?.destination
    } catch (error) {
        console.log(error)
    }
}

// get destination details
const getDestinationDetails = async (token: string, id: string) => {
    try {
        const { data } = await api.get(`/destinationDetails/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return data
    } catch (error) {
        console.log(error)
    }
}

// get destination reviews
const getDestinationReviews = async (token: string, id: string) => {
    try {
        const { data } = await api.get(`/reviews/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return data
    } catch (error) {
        console.log(error)
    }
}

// get destination program or itenary
const getDestinationItenary = async (token: string, id: string) => {
    try {
        const { data } = await api.get(`/itinerary/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return data
    } catch (error) {
        console.log(error)
    }
}

// make booking for a destination
const makeBooking = async (token: string, data: BookingData) => {
    try {
        const response = await api.post("/bookings", data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return response?.data
    } catch (error) {
        console.log(error)
    }
}

// get bookings by user
const getBookingsByUser = async (token: string, userId: string) => {
    try {
        const { data } = await api.get(`/bookings/user/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return data
    } catch (error) {
        console.log(error)
    }
}

// make cancel booking
const cancelBooking = async (token: string, bookingId: string) => {
    try {
        const { data } = await api.delete(`/bookings/${bookingId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        return data
    } catch (error) {
        console.log(error)
    }
}

export { getDestinations, getDestinationDetails, getDestinationReviews, getDestinationItenary, getDestination, makeBooking, getBookingsByUser, cancelBooking }
