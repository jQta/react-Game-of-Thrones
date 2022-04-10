import BtnHome from '../../components/btnhome/BtnHome';
import Flags from '../../components/flags/Flags';
import Nav from '../../components/navbar/Nav';
import Exhibitor from '../../components/housescomponents/exhibitor/Exhibitor';
import GotContextProvider from '../../context/GameOfThronesContext';

export default function Houses() {
  return (
    <>
      <BtnHome />
      <Flags />
      <GotContextProvider>
        <Exhibitor />
      </GotContextProvider>
      <Nav />
    </>
  )
}
