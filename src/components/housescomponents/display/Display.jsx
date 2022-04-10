import "./Display.scss";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { GotContext } from "../../../context/GameOfThronesContext";

export default function Display() {
    const { t } = useTranslation();
    const { home } = useContext(GotContext);

    return (
        <>
            {home.createdAt &&
                <section className="feature-container">
                    <div className="display-container">
                        <img className="display-container__image" src={home.logoURL} alt={home.name} />
                        <h3 className="display-container__caption">{home.name}</h3>
                    </div>
                    <div className="display-box">
                        <div className="row">
                            <div className="col-md-6 col-lg-2">
                                <h3>{t('Slogan')}</h3>
                                <p className="display-container__text">{home.words}</p>
                            </div>
                            <div className="col-md-6 col-lg-2">
                                <h3>{t('Location')}</h3>
                                {home.seat && home.seat.map((seats, i) => <p key={i} className="display-container__text">{seats}</p>)}
                            </div>
                            <div className="col-md-6 col-lg-2">
                                <h3>{t('Region')}</h3>
                                {home.region && home.region.map((regions, i) => <p key={i} className="display-container__text">{regions}</p>)}
                            </div>
                            <div className="col-md-6 col-lg-2">
                                <h3>{t('Allegiances')}</h3>
                                {home.allegiance && home.allegiance.map((allys, i) => <p key={i} className="display-container__text">{allys}</p>)}
                            </div>
                            <div className="col-md-6 col-lg-2">
                                <h3>{t('Religions')}</h3>
                                {home.religion && home.religion.map((religions, i) => <p key={i} className="display-container__text">{religions}</p>)}
                            </div>
                            <div className="col-md-6 col-lg-2">
                                <h3>{t('Fundation')}</h3>
                                <p className="display-container__text">{new Date(home.createdAt.substring(0, home.createdAt.indexOf("T"))).toLocaleDateString("en-UK")}</p>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

/* {home[ 0 ].createdAt.substring(0, home[ 0 ].createdAt.indexOf("T"))} */