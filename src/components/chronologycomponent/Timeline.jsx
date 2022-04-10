import "./Timeline.scss"
import { useContext, useState } from "react";
import { GotContext } from "../../context/GameOfThronesContext";
import Arrow from "../../assets/images/arrow.svg";
import Loading from "../loading/Loading";

export default function Timeline() {
    const { characters, pageLoaded } = useContext(GotContext);
    const [ highToLow, setHighToLow ] = useState(true);
    const ageRange = [];
    const agePair = [];
    const ageOdd = [];

    for (let character of characters) {
        if (character.age) {
            if (character.age.age) {
                ageRange.push(character);
            }
        }
    }

    const orderedCharacters = () => {
        if (highToLow) {
            ageRange.sort((a, b) => a.age.age - b.age.age);
        } else {
            ageRange.sort((a, b) => b.age.age - a.age.age);
        }

        for (let i = 0; i < ageRange.length; i++) {
            if (i % 2 === 0) {
                agePair.push(ageRange[ i ]);
            } else {
                ageOdd.push(ageRange[ i ]);
            }
        }
    }

    const changeOrder = () => {
        if (highToLow) {
            setHighToLow(false);
            orderedCharacters();
        } else {
            setHighToLow(true);
            orderedCharacters();
        }
    };

    orderedCharacters();

    return (
        pageLoaded === false ? <Loading /> :
            <section className="timeline-box">
                <div className={"timeline-box__circle"} onClick={changeOrder}>{agePair[ 0 ] && agePair[ 0 ].age.age}</div>
                <img className={highToLow ? "timeline-box__arrow" : "timeline-box__arrow--rotated"} src={Arrow} alt="home" />
                <div className="timeline-pack">
                    <div className="timeline-pack--flex">
                        <div className="timeline-pack__left">
                            {agePair.map((character) => (
                                <div key={character.name} className="timeline-pack__pair">
                                    {character.age && <p className="timeline-pack__pair--age">{character.age.age}</p>}
                                    <p className="timeline-pack__pair--name">{character.name}</p>
                                    <img className="timeline-pack__pair--img" src={character.image} alt={character.name} />
                                </div>
                            ))};
                        </div>
                        <div className="timeline-pack__right">
                            {ageOdd.map((character) => (
                                <div key={character.name} className="timeline-pack__odd">
                                    {character.age && <p className="timeline-pack__odd--age">{character.age.age}</p>}
                                    <p className="timeline-pack__odd--name">{character.name}</p>
                                    <img className="timeline-pack__odd--img" src={character.image} alt={character.name} />
                                </div>
                            ))};
                        </div>
                    </div>
                </div>
            </section>
    )
}
