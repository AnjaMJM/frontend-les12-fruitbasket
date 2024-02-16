import './App.css'
import {useState} from "react";
import FruitCounter from "./components/FruitCounter/FruitCounter.jsx";
import Button from "./components/Button/Button.jsx";

// bestellijst aanmaken voor het fruit (div)
// - per fruit een eigen 'box' (section), met daarin:
//         - naam van het fruit,
//         - afbeelding,
//         - plus- en min-knop
//         - en een invoerveld voor het aantal
//         - extra: units van het fruit (per stuk of gewicht)
// - State maken voor de input
// - Plus en min knop activeren en koppelen aan state van input

// styling: inputveld geen border en geen interne counter

function App() {
    let [counterStrawberry, setCounterStrawberry] = useState(0)
    let [counterKiwi, setCounterKiwi] = useState(0)
    let [counterBanana, setCounterBanana] = useState(0)
    let [counterApple, setCounterApple] = useState(0)
    const resetKey = () => {
        setCounterKiwi(0)
        setCounterStrawberry(0)
        setCounterBanana(0)
        setCounterApple(0)
    }


    return (
        <>
            <header>
                <h1>Fruitmand bezorgservice</h1>
                <p>Als je niet naar buiten wil</p>
            </header>

            <main>
                <form>
                    <fieldset>
                        <legend><h2> Kies je favoriete fruit:</h2></legend>

                        <FruitCounter
                            fruit="Aardbei"
                            counter={counterStrawberry}
                            setter={setCounterStrawberry}/>
                        <FruitCounter
                            fruit="Appel"
                            counter={counterApple}
                            setter={setCounterApple}/>
                        <FruitCounter
                            fruit="Kiwi"
                            counter={counterKiwi}
                            setter={setCounterKiwi}/>
                        <FruitCounter
                            fruit="Banaan"
                            counter={counterBanana}
                            setter={setCounterBanana}/>

                        <Button type="button" handleClick={resetKey}>Reset</Button>
                    </fieldset>
                    <fieldset className="delivery-details">
                        <legend><h2>Jouw gegevens:</h2></legend>
                        <label htmlFor="voornaam">Voornaam: <input id="voornaam" type="text"/></label>
                        <label htmlFor="achternaam">Achternaam: <input id="achternaam" type="text"/></label>
                        <label htmlFor="leeftijd">Leeftijd: <input id="leeftijd" type="text"/></label>
                        <label htmlFor="postcode-en-huisnr.">Postcode en huisnr.: <input id="postcode-en-huisnr."
                                                                                         type="text"/></label>
                        <label htmlFor="bezorgfrequentie">Bezorgfrequentie: <select id="bezorgfrequentie">
                            <option value="Iedere week">Iedere week</option>
                            <option value="Iedere twee weken">Iedere twee weken</option>
                            <option value="Iedere maand">Iedere maand</option>
                            <option value="Eenmalig">Eenmalig</option>
                        </select></label>
                        <label>Bezorgmoment: <input id="bezorgen-overdag" type="radio"
                                                                           name="bezorgmoment"
                                                                           value="Overdag"/><label htmlFor="bezorgen-overdag">Overdag</label>
                            <input id="bezorgen-avond" type="radio" name="bezorgmoment"
                                   value="Avond'"/><label htmlFor="bezorgen-avond">Avond</label></label>
                    </fieldset>
                </form>
            </main>
        </>
    )
}

export default App

// Het formulier bevat de volgende velden:
// Voornaam
// Achternaam
// Leeftijd
// Postcode
// Selectbox met bezorgfrequentie. Opties: iedere week, om de week, iedere maand
// Radiobuttons met tijdvak. Opties: overdag, 's avonds
// Opmerking (textarea)
// Akkoord met de voorwaarden (checkbox)
// Verzendbutton
