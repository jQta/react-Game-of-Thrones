import BtnHome from '../../components/btnhome/BtnHome';
import Flags from '../../components/flags/Flags';
import Nav from '../../components/navbar/Nav';
import Gallery from '../../components/characterscomponents/gallery/Gallery';
import GotContextProvider from '../../context/GameOfThronesContext';

export default function Characters() {

    return (
        <>
            <BtnHome />
            <Flags />
            <GotContextProvider>
                <Gallery />
            </GotContextProvider>
            <Nav />
        </>
    )
}
