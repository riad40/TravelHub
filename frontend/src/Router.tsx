import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, Destinations } from "./pages"
import { NotFound } from "./components"

const Router = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
