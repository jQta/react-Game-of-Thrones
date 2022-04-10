import { Link } from "react-router-dom";
import BtnHome from "../../components/btnhome/BtnHome";
import Flags from "../../components/flags/Flags";
import Back from "../../components/back/Back";
import Card from "../../components/characterscomponents/card/Card";
import GotContextProvider from "../../context/GameOfThronesContext";

export default function CharacterDetail() {
    return (
        <>
            <Link to="/characters">
                <Back />
            </Link>
            <BtnHome />
            <Flags />
            <GotContextProvider>
                <Card />
            </GotContextProvider>
        </>
    )
}
