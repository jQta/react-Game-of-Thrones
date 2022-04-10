import Flags from '../../components/flags/Flags';
import Nav from '../../components/navbar/Nav';
import { useTranslation } from 'react-i18next';
import './Home.scss';

export default function Home() {
    const { t } = useTranslation();

    return (
        <div className="home-container">
            <Flags />
            <h1 className="home-container__title">{t('Game of Thrones')}</h1>
            <Nav />
        </div>
    )
}
