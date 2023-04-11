import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, Destinations, Login, Register, DestinationDetails, Profile, Dashboard } from "./pages"
import { NotFound, Wrapper } from "./components"

const Router = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/destinations/:id" element={<DestinationDetails />} />
                <Route path="/profile" element={<Profile />} />
                <Route element={<Wrapper />}>
                    <Route path="/admin" element={<Dashboard />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
