import { Image } from "../../@types"
import { Loading } from "../../components"
import { useState, useEffect } from "react"
import { getDestinationDetails } from "../../services/destinations/requests"
import useAuth from "../../hooks/useAuth"
import { useParams } from "react-router-dom"
import readImage from "../../helpers/readImage"

const Galleries = () => {
    const [images, setImages] = useState<Image[]>()
    const [loading, setLoading] = useState<boolean>(true)

    const { auth } = useAuth()

    const { id } = useParams<{ id: string }>()

    useEffect(() => {
        const getImages = async () => {
            const images = await getDestinationDetails(auth?.token, id as string)
            setImages(images.images)
            setLoading(false)
        }
        getImages()

        return () => {
            setImages(undefined)
        }
    }, [])

    if (loading) return <Loading />

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-3/4 mx-auto">
            {images?.map((image, index) => {
                return <img src={readImage(image)} alt="" key={index} className="h-auto max-w-full rounded-lg" />
            })}
        </div>
    )
}

export default Galleries
