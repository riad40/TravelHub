import api from "../../configs/api"

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

export { getDestinations, getDestinationDetails, getDestinationReviews, getDestinationItenary, getDestination }
