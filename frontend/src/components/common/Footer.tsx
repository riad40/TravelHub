import { Link } from "react-router-dom"

const Footer = (): JSX.Element => {
    return (
        <>
            <footer className="w-full relative bottom-0 mt-4" style={{ backgroundColor: "#eee" }}>
                <div className="flex flex-col sm:flex-row sm:justify-between items-center w-3/4 mx-auto py-5">
                    <div className="flex items-center">
                        <img src={require("../../assets/imgs/logo.png")} alt="logo" style={{ width: "100px" }} />
                    </div>

                    <div className="flex items-center">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            © 2023 by
                            <Link to="/" className="hover:underline">
                                TravelHub™
                            </Link>
                            . All Rights Reserved.
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
