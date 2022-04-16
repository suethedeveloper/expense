import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props: any) => {
    const [amountValid, setAmountValid] = useState(true)
    const amountInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredAMount = amountInputRef.current!.value;
        const enteredAMountNum = +enteredAMount;
        if (
            enteredAMount.trim().length === 0 ||
            enteredAMountNum < 1 ||
            enteredAMountNum > 5
        ) {
            setAmountValid(false);
            return;
        }
        props.onAddToCart(enteredAMountNum);
    }
    return <form className={classes.form} onSubmit={submitHandler}>
        <Input 
            ref={amountInputRef}
            label="Amount"
            input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1"
        }} />
        <button>+ Add</button>
        {!amountValid && <p>Please enter a valid amunt (1-5).</p>}
    </form>
}

export default MealItemForm;