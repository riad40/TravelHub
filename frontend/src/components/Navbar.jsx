import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header class="w-full" style={{ backgroundColor: "#202442" }}>
            <nav class="flex flex-col sm:flex-row sm:justify-between items-center w-3/4 mx-auto py-5">
                <Link to="/" class="brand-logo">
                    TravelHub
                </Link>
                <Link
                    to="/login"
                    class="login my-3 sm:my-0 text-dark font-medium cursor-pointer"
                >
                    Log In
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;
