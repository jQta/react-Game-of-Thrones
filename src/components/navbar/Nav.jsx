import './Nav.scss';
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

export default function Nav() {
    const { t } = useTranslation();

    return (
        <nav className="nav-container">
            <NavLink className="nav-container__item" to="/characters" style={({ isActive }) => ({ "borderBottom": isActive ? '3px solid white' : 'none' })}>{t('Characters')}</NavLink>
            <NavLink className="nav-container__item" to="/houses" style={({ isActive }) => ({ "borderBottom": isActive ? '3px solid white' : 'none' })}>{t('Houses')}</NavLink>
            <NavLink className="nav-container__item" to="/chronology" style={({ isActive }) => ({ "borderBottom": isActive ? '3px solid white' : 'none' })}>{t('Chronology')}</NavLink>
        </nav>
    );
};
