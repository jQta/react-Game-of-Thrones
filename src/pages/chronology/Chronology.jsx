import BtnHome from "../../components/btnhome/BtnHome";
import Flags from "../../components/flags/Flags";
import Nav from "../../components/navbar/Nav";
import Timeline from "../../components/chronologycomponent/Timeline";
import GotContextProvider from "../../context/GameOfThronesContext";

export default function Chronology() {
    return (<>
        <BtnHome />
        <Flags />
        <GotContextProvider>
            <Timeline />
        </GotContextProvider>
        <Nav />
    </>
    )
}
