import { setAuth } from "../state/actions"
import rootReducer from "../state/reducers"

export type Destination = {
    id: number
    name: string
    description: string
    image: string
    price: number
}

// make auth type for user
export type Auth = {
    user: User
    token: string
}

// make user type
export type User = {
    _id?: number
    name: string
    email: string
    roles: string[]
}

// make auth action type
export type AuthAction = ReturnType<typeof setAuth>

// make root state type
export type RootState = ReturnType<typeof rootReducer>
