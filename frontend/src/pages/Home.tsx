import { NavBar, Footer, Hero } from "../components"

const Home = (): JSX.Element => {
    return (
        <>
            <NavBar />
            <Hero />
            <h1 className="text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-center py-5">Galleries</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-3/4 mx-auto">
                <img src={require("../assets/imgs/333.png")} alt="black-beach" className="h-auto max-w-full rounded-lg" />
                <img src={require("../assets/imgs/333.png")} alt="black-beach" className="h-auto max-w-full rounded-lg" />
                <img src={require("../assets/imgs/333.png")} alt="black-beach" className="h-auto max-w-full rounded-lg" />
                <img src={require("../assets/imgs/333.png")} alt="black-beach" className="h-auto max-w-full rounded-lg" />
                <img src={require("../assets/imgs/333.png")} alt="black-beach" className="h-auto max-w-full rounded-lg" />
                <img src={require("../assets/imgs/333.png")} alt="black-beach" className="h-auto max-w-full rounded-lg" />
            </div>
            <Footer />
        </>
    )
}

export default Home
