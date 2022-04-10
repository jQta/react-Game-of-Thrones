import "./Card.scss";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { GotContext } from "../../../context/GameOfThronesContext";
import axios from "axios";

export default function Card() {
    const { t } = useTranslation();
    const { character } = useContext(GotContext);
    const [ house, setHouse ] = useState([]);

    useEffect(() => {
        const getHouse = async () => {
            const res = await axios.get(`https://api.got.show/api/show/houses/${character.house}`);
            if (res.data[ 0 ] !== undefined) {
                setHouse(res.data[ 0 ]);
            }
        };
        getHouse();
    }, [ character.house ]);

    return (
        <>
            <section className="detail-container">
                <div className="portrait-container">
                    <img className="portrait-container__image" src={character.image} alt={character.name} />
                    <h3 className="portrait-container__caption">{character.name}</h3>
                </div>
                <div className="portrait-box">
                    <div className="row">
                        <div className="col-md-6 col-lg-2">
                            <h3>{t('House')}</h3>
                            <img className="portrait-container__image--badge" src={house.logoURL} alt={character.name} />
                        </div>
                        <div className="col-md-6 col-lg-2">
                            <h3>{t('Allegiances')}</h3>
                            {character.allegiances && character.allegiances.map((allys, i) => <p key={i} className="portrait-container__text">{allys}</p>)}
                        </div>
                        <div className="col-md-6 col-lg-2">
                            <h3>{t('Appearances')}</h3>
                            <div className="box-scroll">
                                {character.appearances && character.appearances.map((looks, i) => <p key={i} className="portrait-container__text">{looks}</p>)}
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2">
                            <h3>{t('Father')}</h3>
                            <p className="portrait-container__text">{character.father}</p>
                        </div>
                        <div className="col-md-6 col-lg-2">
                            <h3>{t('Siblings')}</h3>
                            {character.siblings && character.siblings.map((child, i) => <p key={i} className="portrait-container__text">{child}</p>)}
                        </div>
                        <div className="col-md-6 col-lg-2">
                            <h3>{t('Titles')}</h3>
                            <div className="box-scroll">
                                {character.titles && character.titles.map((title, i) => <p key={i} className="portrait-container__text">{title}</p>)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
