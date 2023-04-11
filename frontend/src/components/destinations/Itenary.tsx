import { Destination } from "../../@types"
import "../../assets/css/itenary.css"

const Itenary = ({ destination }: { destination: Destination }) => {
    return (
        <div className="container">
            <div className="another_container">
                <ul>
                    <li>
                        <div className="box">
                            <div className="info">
                                <h1>Day 1</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
                            </div>
                            <div className="image">
                                <img src={require("../../assets/imgs/333.png")} alt="" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <div className="info">
                                <h1>Day 1</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
                            </div>
                            <div className="image">
                                <img src={require("../../assets/imgs/333.png")} alt="" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <div className="info">
                                <h1>Day 1</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
                            </div>
                            <div className="image">
                                <img src={require("../../assets/imgs/333.png")} alt="" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <div className="info">
                                <h1>Day 1</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
                            </div>
                            <div className="image">
                                <img src={require("../../assets/imgs/333.png")} alt="" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="box">
                            <div className="info">
                                <h1>Day 1</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
                            </div>
                            <div className="image">
                                <img src={require("../../assets/imgs/333.png")} alt="" />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Itenary
