import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Characters from './pages/characters/Characters';
import CharacterDetail from './pages/characterdetail/CharacterDetail';
import Houses from './pages/houses/Houses';
import HouseDetail from './pages/housedetail/HouseDetail';
import Chronology from './pages/chronology/Chronology';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/characters/:characterName" element={<CharacterDetail />} />
        <Route path="/houses" element={<Houses />} />
        <Route path="/houses/:houseName" element={<HouseDetail />} />
        <Route path="/chronology" element={<Chronology />} />
      </Routes>
    </Router>
  )
}

export default App;
