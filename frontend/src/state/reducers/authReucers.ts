import { Auth, AuthAction } from "../../@types"

// set initial state
const initialState: Auth = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : {},
    token: localStorage.getItem("token") || "",
}

// make auth reducer
const authReducer = (state = initialState, action: AuthAction) => {
    switch (action.type) {
        case "SET_AUTH":
            return action.payload
        default:
            return state
    }
}

export default authReducer
