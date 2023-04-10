import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, Destinations, Login, Register } from "./pages"
import { NotFound } from "./components"

const Router = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
