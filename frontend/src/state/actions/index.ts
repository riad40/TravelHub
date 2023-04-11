import { Auth } from "../../@types"

// set auth action
const setAuth = (auth: Auth) => {
    return {
        type: "SET_AUTH",
        payload: auth,
    }
}

export { setAuth }
