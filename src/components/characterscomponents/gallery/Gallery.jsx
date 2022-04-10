import "./Gallery.scss"
import { useContext } from 'react';
import { GotContext } from '../../../context/GameOfThronesContext';
import { generatePath, Link } from "react-router-dom";
import SearchForm from "../../searchform/SearchForm";
import Loading from "../../loading/Loading";

export default function Gallery() {
    const { characters, pageLoaded } = useContext(GotContext);

    return (
        <>
            <SearchForm />
            <div className="gallery-container">
                <div className="gallery-container__box">
                    <div className="row">
                        {pageLoaded === false ? <Loading /> : characters.map((character) => (
                            <div className="col-12 col-md-6 col-lg-2" key={character.name}>
                                <figure className="portrait-box">
                                    <Link to={generatePath("/characters/:name", { name: character.name })}><img className="portrait-box__image" src={character.image} alt={character.name} /></Link>
                                    <p className="portrait-box__text">{character.name}</p>
                                </figure>
                            </div>
                        ))};
                    </div>
                </div>
            </div>
        </>
    )
}
