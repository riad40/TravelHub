import { Destination } from "../../@types"

const Galleries = ({ destination }: { destination: Destination }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-3/4 mx-auto">
            <img src={require("../../assets/imgs/333.png")} alt="black-beach" className="h-auto max-w-full rounded-lg" />
            <img src={require("../../assets/imgs/333.png")} alt="black-beach" className="h-auto max-w-full rounded-lg" />
            <img src={require("../../assets/imgs/333.png")} alt="black-beach" className="h-auto max-w-full rounded-lg" />
            <img src={require("../../assets/imgs/333.png")} alt="black-beach" className="h-auto max-w-full rounded-lg" />
            <img src={require("../../assets/imgs/333.png")} alt="black-beach" className="h-auto max-w-full rounded-lg" />
            <img src={require("../../assets/imgs/333.png")} alt="black-beach" className="h-auto max-w-full rounded-lg" />
            <img src={require("../../assets/imgs/333.png")} alt="black-beach" className="h-auto max-w-full rounded-lg" />
            <img src={require("../../assets/imgs/333.png")} alt="black-beach" className="h-auto max-w-full rounded-lg" />
            <img src={require("../../assets/imgs/333.png")} alt="black-beach" className="h-auto max-w-full rounded-lg" />
        </div>
    )
}

export default Galleries
