import api from "../../configs/api"

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

export { getDestinations }
