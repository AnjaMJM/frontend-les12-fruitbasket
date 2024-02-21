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
    // orderform fruit
    let [counterStrawberry, setCounterStrawberry] = useState(0)
    let [counterKiwi, setCounterKiwi] = useState(0)
    let [counterBanana, setCounterBanana] = useState(0)
    let [counterApple, setCounterApple] = useState(0)
    // delivery information
    let [formState, setFormState] = useState({
        firstname: "",
        lastname: "",
        age: 20,
        zipCode: "",
        orderFrequency: "Iedere Week",
        deliveryTime: "Overdag",
    })

    function handleChange(e) {
        const changedFieldName = e.target.name;

        setFormState({
            ...formState,
            [changedFieldName]: e.target.value,

        })
        console.log()
    }

    // let [firstName, setFirstName] = useState("")
    // let [lastName, setLastName] = useState("")
    // let [age, setAge] = useState(0)
    // let [zipCode, setZipCode] = useState("")
    // let [orderFrequency, toggleOrderFrequency] = useState()
    // let [deliveryTime, toggleDeliveryTime] = useState()
    //
    const resetKey = () => {
        setCounterKiwi(0)
        setCounterStrawberry(0)
        setCounterBanana(0)
        setCounterApple(0)
    }
    const {firstname, lastname, age, zipCode, orderFrequency, deliveryTime} = formState
    function handleSubmit(e) {
        e.preventDefault( ); // zorgt ervoor dat de eerste (default) actie van een button (reset) niet wordt uitgevoerd
        console.log ( {strawberry: counterStrawberry, apple: counterApple, kiwi: counterKiwi, banana: counterBanana, name: firstname + lastname, age: age, zipcode: zipCode, orderFrequency: orderFrequency, deliveryTime: deliveryTime })
    }


    return (
        <>
            <header>
                <h1>Fruitmand bezorgservice</h1>
                <p>Als je niet naar buiten wil</p>
            </header>

            <main>
                <form>
                    <fieldset className="order-details">
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
                        <label htmlFor="voornaam">Voornaam:
                            <input
                                id="voornaam"
                                type="text"
                                name="firstname"
                                value={formState.firstname}
                                onChange={handleChange}
                            /></label>
                        <label htmlFor="achternaam">Achternaam:
                            <input
                                id="achternaam"
                                type="text"
                                name="lastname"
                                value={formState.lastname}
                                onChange={handleChange}
                            /></label>
                        <label htmlFor="leeftijd">Leeftijd:
                            <input
                                id="leeftijd"
                                type="text"
                                name="age"
                                value={formState.age}
                                onChange={handleChange}
                            /></label>
                        <label htmlFor="postcode">Postcode:
                            <input id="postcode"
                                   type="text"
                                   name="zipCode"
                                   value={formState.zipCode}
                                   onChange={handleChange}
                            /></label>
                        <label htmlFor="bezorgfrequentie">Bezorgfrequentie:
                            <select
                                id="bezorgfrequentie"
                                name="orderFrequency"
                                value={formState.orderFrequency}
                                onChange={handleChange}
                            >
                            <option value="Iedere week">Iedere week</option>
                            <option value="Iedere twee weken">Iedere twee weken</option>
                            <option value="Iedere maand">Iedere maand</option>
                            <option value="Eenmalig">Eenmalig</option>
                        </select></label>
                        <label>Bezorgmoment:
                            <input id="bezorgen-overdag"
                                   type="radio"
                                   name="deliveryTime"
                                   value="Overdag"
                                   checked={formState.deliveryTime === "Overdag"}
                                   onChange={handleChange}
                            />
                            <label htmlFor="bezorgen-overdag">Overdag</label>
                            <input id="bezorgen-avond"
                                   type="radio"
                                   name="deliveryTime"
                                   value="Avond"
                                   checked={formState.deliveryTime === "Avond"}
                                   onChange={handleChange}
                            />
                            <label htmlFor="bezorgen-avond">Avond</label>
                        </label>
                        <button type="submit" onClick={(e) => {handleSubmit(e)}}>Bestellen</button>
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
