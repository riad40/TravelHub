import { setAuth } from "../state/actions"
import rootReducer from "../state/reducers"

export type Destination = {
    _id: string
    name: string
    description: string
    location: string
    image: Image
    price: number
}

// make auth type for user
export type Auth = {
    user: User
    token: string
}

// make image type
export type Image = {
    contentType: string
    data: {
        data: number[]
        type: string
    }
}

// make user type
export type User = {
    id: string
    username: string
    email: string
    roles: string[]
}

// make auth action type
export type AuthAction = ReturnType<typeof setAuth>

// make root state type
export type RootState = ReturnType<typeof rootReducer>

// make destination details type
export type DestinationDetails = {
    _id: string
    start_date: string
    end_date: string
    destination: Destination
    images: Image[]
    starting_point: string
    inclusions: string[]
    exclusions: string[]
}

// make review type
export type Review = {
    _id?: string
    comment: string
    rating: number
    user: User
    destination: Destination
}

// make itinerary type
export type Itinerary = {
    _id: string
    description: string
    destination: Destination
    dayRange: number
    image: Image
}

// make booking type
export type BookingData = {
    destination: string
    user: string
    passangers: {
        fullName: string
        email: string
        phone: string
    }[]
}

// review form type
export type ReviewData = {
    comment: string
    rating: number
    destination?: string
    user: string
}
