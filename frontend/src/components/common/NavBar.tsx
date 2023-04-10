import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

const NavBar = ({ activeTab }: { activeTab: string }): JSX.Element => {
    const [active, setActive] = useState("home")

    const handleActive = (tab: string) => {
        setActive(tab)
    }

    useEffect(() => {
        handleActive(activeTab)

        return () => {
            handleActive(activeTab)
        }
    }, [activeTab])

    return (
        <>
            <header className="w-full" style={{ backgroundColor: "#eee" }}>
                <nav className="flex flex-col sm:flex-row sm:justify-between items-center w-3/4 mx-auto">
                    <div className="flex items-center">
                        <Link to="/">
                            <img src={require("../../assets/imgs/logo.png")} alt="logo" style={{ width: "100px" }} />
                        </Link>
                    </div>

                    <div className="flex items-center">
                        <Link to="/">
                            <button className={active === "home" ? "bg-blue-400 text-gray-600 font-bold py-2 px-4 rounded mr-2 hover:bg-blue-400" : "bg-gray-200 text-gray-600 font-bold py-2 px-4 rounded mr-2 hover:bg-blue-400"}>Home</button>
                        </Link>
                        <Link to="/destinations">
                            <button className={active === "destinations" ? "bg-blue-400 text-gray-600 font-bold py-2 px-4 rounded mr-2 hover:bg-blue-400" : "bg-gray-200 text-gray-600 font-bold py-2 px-4 rounded mr-2 hover:bg-blue-400"}>Destinations</button>
                        </Link>
                        <Link to="/login">
                            <button className={active === "login" ? "bg-blue-400 text-gray-600 font-bold py-2 px-4 rounded mr-2 hover:bg-blue-400" : "bg-gray-200 text-gray-600 font-bold py-2 px-4 rounded mr-2 hover:bg-blue-400"}>Login</button>
                        </Link>
                        <Link to="/register">
                            <button className={active === "register" ? "bg-blue-400 text-gray-600 font-bold py-2 px-4 rounded mr-2 hover:bg-blue-400" : "bg-gray-200 text-gray-600 font-bold py-2 px-4 rounded mr-2 hover:bg-blue-400"}>Register</button>
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar
