import authReducer from "./authReucers"
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    auth: authReducer,
})

export default rootReducer
