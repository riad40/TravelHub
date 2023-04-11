import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../@types"

const useAuth = () => {
    const dispatch = useDispatch()

    const auth = useSelector((state: RootState) => state.auth)

    return { auth, dispatch }
}

export default useAuth
