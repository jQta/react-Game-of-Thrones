import "./BtnHome.scss"
import { Link } from "react-router-dom"
import home from "../../assets/images/home.svg"

export default function BtnHome() {
    return (
        <div className="btn-home">
            <Link to="/"><img className="btn-home__item" src={home} alt="home" /></Link>
        </div>
    )
}
