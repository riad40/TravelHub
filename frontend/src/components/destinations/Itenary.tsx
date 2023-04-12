import { Itinerary } from "../../@types"
import "../../assets/css/itenary.css"
import { getDestinationItenary } from "../../services/destinations/requests"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import readImage from "../../helpers/readImage"

const Itenary = () => {
    const [itenary, setItenary] = useState<Itinerary[]>()

    const { auth } = useAuth()

    const { id } = useParams<{ id: string }>()

    useEffect(() => {
        const getItenary = async () => {
            const itenary = await getDestinationItenary(auth?.token, id as string)
            setItenary(itenary)
        }
        getItenary()

        return () => {
            setItenary(undefined)
        }
    }, [])

    return (
        <div className="container">
            <div className="another_container">
                <ul>
                    {itenary?.map((itenary, index) => {
                        return (
                            <li>
                                <div className="box">
                                    <div className="info">
                                        <h1>{itenary.dayRange}</h1>
                                        <p>{itenary.description}</p>
                                    </div>
                                    <div className="image">
                                        <img src={readImage(itenary.image)} alt="" />
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Itenary
