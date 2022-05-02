import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

interface UserState {
    name: boolean;
    street: boolean;
    city: boolean;
    postalCode: boolean;
}

const isEmpty = (value: string) => value.trim() === "";
const isFiveChar = (value: string) => value.trim().length === 5;

const Checkout  = (
    {onCancel}: {onCancel: () => void}
    ) => {
    
    const [formInputValidity, setFormInputValidity] = useState<UserState>({
        name: true,
        street: true,
        city: true,
        postalCode: true
    });

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

        const enteredNameValid = !isEmpty(enteredName);
        const enteredStreetValid = !isEmpty(enteredStreet);
        const enteredPostalValid = isFiveChar(enteredPostal);
        const enteredCityValid = !isEmpty(enteredCity);

        setFormInputValidity({
            name: enteredNameValid,
            street: enteredStreetValid,
            postalCode: enteredPostalValid,
            city: enteredCityValid
        })

        const formIsValid = 
            enteredNameValid && 
            enteredStreetValid && 
            enteredPostalValid && 
            enteredCityValid;

        if (!formIsValid) {
            return ;
        }
    }

    const nameControlClasses = `${classes.control} ${
        formInputValidity.name ? '' : classes.invalid
    }`
    const streetControlClasses = `${classes.control} ${
        formInputValidity.street ? '' : classes.invalid
    }`
    const postalCodeControlClasses = `${classes.control} ${
        formInputValidity.postalCode ? '' : classes.invalid
    }`
    const cityControlClasses = `${classes.control} ${
        formInputValidity.city ? '' : classes.invalid
    }`
    console.log("==PPP", postalCodeControlClasses)

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef} />
                {!formInputValidity.name && <p>Please enter a valid name!</p>}
            </div>
            <div className={streetControlClasses}>
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={streetInputRef} />
                {!formInputValidity.street && <p>Please enter a valid street!</p>}
            </div>
            <div className={postalCodeControlClasses}>
                <label htmlFor="postalCode">Postal Code</label>
                <input type="text" id="postalCode" ref={postalInputRef} />
                {!formInputValidity.postalCode && <p>Please enter a valid postal code!</p>}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef} />
                {!formInputValidity.city && <p>Please enter a valid city!</p>}
            </div> 
            <div className={classes.actions}>
                <button type="button" onClick={onCancel}>Cancel</button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
}

export default Checkout;