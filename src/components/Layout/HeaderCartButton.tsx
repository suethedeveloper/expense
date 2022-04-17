import { useContext } from "react";

import CartIcon from "./CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props: {onClick: () => void}) => {
    const cartCtx = useContext(CartContext);
    const numOfCartItems = cartCtx.items.reduce((curNum: number, item: {amount: number}) => {
        return curNum + item.amount;
    }, 0);

    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {numOfCartItems}
        </span>
    </button>

}

export default HeaderCartButton;