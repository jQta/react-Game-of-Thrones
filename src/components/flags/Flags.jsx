import "./Flags.scss";
import esp from '../../assets/images/spain.svg';
import eng from '../../assets/images/uk.svg';
import i18n from "../../i18n";

export default function Flags() {
    return (
        <div className="flag-container">
            <img className="flag-container__item" src={esp} alt="spain" onClick={() => i18n.changeLanguage('es')} />
            <img className="flag-container__item" src={eng} alt="uk" onClick={() => i18n.changeLanguage('en')} />
        </div>
    )
}
