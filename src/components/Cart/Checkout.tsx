import { useRef } from "react";
import classes from "./Checkout.module.css";
const Checkout  = (
    {onCancel}: {onCancel: () => void}
    ) => {
    
    const nameInputRef = useRef<any>(); //<HTMLInputElement | null | undefined>
    const streetInputRef = useRef<any>(); //<HTMLInputElement | null | undefined>
    const postalInputRef = useRef<any>(); //<HTMLInputElement | null | undefined>
    const cityInputRef = useRef<any>(); //<HTMLInputElement | null | undefined>

    const confirmHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const enteredName = nameInputRef.current!.value;
        const enteredStreet = streetInputRef.current!.value;
        const enteredPostal = postalInputRef.current!.value;
        const enteredCity = cityInputRef.current!.value;
        console.log("enteredName", enteredName);
        console.log("enteredStreet", enteredStreet)
        console.log("enteredPostal", enteredPostal)
        console.log("enteredCity", enteredCity)
    }

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={streetInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="postal">Postal Code</label>
                <input type="text" id="postal" ref={postalInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef} />
            </div> 
            <div className={classes.actions}>
                <button type="button" onClick={onCancel}>Cancel</button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
}

export default Checkout;