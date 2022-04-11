import "./Exhibitor.scss"
import { useContext } from 'react';
import { GotContext } from '../../../context/GameOfThronesContext';
import { generatePath, Link } from "react-router-dom";
import SearchForm from "../../searchform/SearchForm";
import Loading from "../../loading/Loading";

export default function Exhibitor() {
    const { houses, pageLoaded } = useContext(GotContext);

    return (
        <>
            <SearchForm />
            <div className="exhibitor-container">
                <div className="exhibitor-container__box">
                    <div className="row">
                        {pageLoaded === false ? <Loading /> : houses.map((house) => (
                            house.logoURL && <div className="col-12 col-md-6 col-lg-2" key={house._id}>
                                <figure className="badge-box">
                                    <Link to={generatePath("/houses/:name", { name: house.name })}> <img className="badge-box__image" src={house.logoURL} alt={house.name} /></Link>
                                    <h3 className="badge-box__text">{house.name}</h3>
                                </figure>
                            </div>
                        ))};
                    </div>
                </div>
            </div>
        </>
    )
}
