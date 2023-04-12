import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, Destinations, Login, Register, DestinationDetails, Profile, Dashboard, CreateReview } from "./pages"
import { NotFound, Wrapper, RequireAuth, Verify } from "./components"

const Router = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/verify/:token" element={<Verify />} />
                <Route path="/destinations/:id" element={<DestinationDetails />} />
                <Route element={<RequireAuth roles={["customer"]} />}>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/destinations/:id/review" element={<CreateReview />} />
                </Route>
                <Route element={<Wrapper />}>
                    <Route path="/admin" element={<Dashboard />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
