import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, Destinations } from "./pages"

const Router = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="*" element={<h1>404</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
