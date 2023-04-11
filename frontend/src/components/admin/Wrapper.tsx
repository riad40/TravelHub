import "https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.0/dist/alpine.min.js"
import "../../assets/css/wrapper.css"
import { Outlet } from "react-router-dom"
import { Header, Sidebar } from "../../components"

function Wrapper() {
    return (
        <div>
            <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-700 text-white">
                <Header />
                <Sidebar />
                <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Wrapper
