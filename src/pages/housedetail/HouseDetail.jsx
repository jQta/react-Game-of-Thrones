import { Link } from "react-router-dom";
import BtnHome from "../../components/btnhome/BtnHome";
import Flags from "../../components/flags/Flags";
import Back from "../../components/back/Back";
import Display from "../../components/housescomponents/display/Display";
import GotContextProvider from "../../context/GameOfThronesContext";

export default function HouseDetail() {
    return (
        <>
            <Link to="/houses">
                <Back />
            </Link>
            <BtnHome />
            <Flags />
            <GotContextProvider>
                <Display />
            </GotContextProvider>
        </>
    )
}
