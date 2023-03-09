import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../css/home.css'

function Home() {
  return (
    <>
      <Navbar />
      <section className="App1 w-full">
        <div className="w-full mx-8 sm:w-1/2">
          <h1 className="text-white py-5 text-5xl text-center dark:text-white">
            Marhaba Delivery
          </h1>
          <p className="text-center text-stone-200 text-xl py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem modi non ullam est architecto molestiae sapiente repellendus nemo voluptatibus! Ullam fuga dolor facilis dolorem. Dolore voluptate odio facilis! Mollitia, cupiditate!
          </p>
          <div className="flex justify-center">
            <Link to="/register" className="login">Register</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home