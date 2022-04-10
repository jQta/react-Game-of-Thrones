import './Back.scss'
import { useTranslation } from 'react-i18next';
import Arrow from "../../assets/images/arrow.svg";

export default function Back() {
    const { t } = useTranslation();

    return (
        <div className="back-container">
            <img className="back-container__img" src={Arrow} alt="home" />
            <p className="back-container__text">{t('Back')}</p>
        </div>
    )
}
