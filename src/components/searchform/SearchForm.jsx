import "./SearchForm.scss";
import { GotContext } from '../../context/GameOfThronesContext';
import { useContext } from 'react';
import { useTranslation } from "react-i18next";

export default function SearchForm() {
    const { t } = useTranslation();
    const { onSearch } = useContext(GotContext);

    return (
        <form className="search-container">
            <input className="search-container__input" onChange={onSearch} placeholder={t('Search...')}></input>
        </form>
    )
}
