import { Link } from "react-router-dom"

const Hero = (): JSX.Element => {
    return (
        <>
            <section className="bg-[#eee]">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">Discover The World with TravelHub</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eligendi labore, accusantium, est aperiam cum ut officiis modi fugit excepturi facere! Iure laborum cumque repellendus provident. Officia consequuntur minus qui.</p>
                        <Link to="/destinations" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                            Discover Destinations
                        </Link>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={require("../../assets/imgs/logo.png")} alt="Travel" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
