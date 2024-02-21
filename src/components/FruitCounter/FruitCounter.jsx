import "./fruitcounter.css"
import Button from "../Button/Button.jsx";


function FruitCounter({fruit, imgURL, counter, setter}) {

    const increaseFruit = () => {
        console.log("meer fruit")
        setter((prevCounter) => prevCounter +1)
    }
    const decreaseFruit = () => {
        console.log("Minder fruit")
        setter((prevCounter) => prevCounter -1)
    }
    const resetKey = () => setter(0)


    return (
        <section className="fruit-section">
            <img className="fruit-image" src={imgURL} alt={fruit}/>
            <label htmlFor={fruit}>{fruit}</label>
            <Button
                btnType="button"
                handleClick={decreaseFruit}
                disabled={counter <= 0}>-</Button>
            <input id={fruit} type="number" className="fruit-counter-input" min="0" value={counter}
                   onChange={(e) => setter(e.target.value)}/>
            {/* input veld kan niet lager dan 0, door 'min' aan te geven. Tegelijk is de knop om minder fruit te bestellen disabled*/}
            <Button
                btnType="button"
                handleClick={increaseFruit}>+</Button>

        </section>
    );
}

export default FruitCounter;