import { Image } from "../@types"

const readImage = (image: Image) => {
    const binaryData = new Uint8Array(image.data.data)
    const blob = new Blob([binaryData], {
        type: image.contentType,
    })
    const url = URL.createObjectURL(blob)
    return url
}

export default readImage
