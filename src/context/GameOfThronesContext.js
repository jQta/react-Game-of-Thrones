import axios from "axios";
import { useParams } from "react-router-dom";
const { createContext, useState, useEffect } = require("react");

export const GotContext = createContext();

export default function GotContextProvider({ children }) {
  const [ characters, setCharacters ] = useState([]);
  const [ character, setCharacter ] = useState([]);
  const [ houses, setHouses ] = useState([]);
  const [ home, setHome ] = useState([]);
  const [ filteredCharacters, setFilteredCharacters ] = useState([]);
  const [ filteredHouses, setFilteredHouses ] = useState([]);
  const [ pageLoaded, setPageLoaded ] = useState(false);
  const { characterName } = useParams();
  const { houseName } = useParams();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://api.got.show/api/show/characters/");
      setCharacters(res.data);
      setFilteredCharacters(res.data);
      setPageLoaded(true);
    };
    getData();
  }, []);

  useEffect(() => {
    if (characterName) {
      const getCharacter = async () => {
        const res = await axios.get(`https://api.got.show/api/show/characters/${characterName}`);
        setCharacter(res.data);
      }
      getCharacter();
    }
  }, [ characterName ]);

  const characterFiltered = (filtered) => {
    const resultFiltered = filteredCharacters.filter(character => {
      if (character.name.toLowerCase().includes(filtered.toLowerCase())) {
        return character;
      }
      return false;
    });
    setCharacters(resultFiltered);
  }

  useEffect(() => {
    const getHouses = async () => {
      const res = await axios.get("https://api.got.show/api/show/houses/");
      setHouses(res.data);
      setFilteredHouses(res.data);
      setPageLoaded(true);
    };
    getHouses();
  }, []);

  useEffect(() => {
    const getHome = async () => {
      const res = await axios.get(`https://api.got.show/api/show/houses/${houseName}`);
      setHome(res.data[ 0 ]);
    };
    getHome();
  }, [ houseName ]);

  const houseFiltered = (filtered) => {
    const resultFiltered = filteredHouses.filter(house => {
      if (house.name.toLowerCase().includes(filtered.toLowerCase())) {
        return house;
      }
      return false;
    });
    setHouses(resultFiltered);
  }

  const onSearch = e => {
    characterFiltered(e.target.value);
    houseFiltered(e.target.value);
  }

  return (
    <GotContext.Provider value={{ characters, character, houses, home, pageLoaded, onSearch }}>
      {children}
    </GotContext.Provider>

  );
};
