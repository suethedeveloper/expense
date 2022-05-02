import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext, { Item } from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import USerDataType from "../../types/UserDataType";

const Cart = ({onClose}: {onClose: () => void}) => {
    const [isCheckout, setCheckout] = useState<boolean>(false);
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const cartItemRemoveHandler = (id: string) => {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = (item: Item) => {
        cartCtx.addItem({...item, amount: 1});
    };

    const orderHandler = () => {
        setCheckout(true);
    };

    const submitOrderHandler = (userData: USerDataType) => {
        const URL = `https://${process.env.REACT_APP_FIREBASE_KEY}.firebaseio.com/orders.json`;
        fetch(URL, {
            method: "POST",
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })
        });
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map(item => (
                <CartItem
                    id={item.id}
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(this, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    const modalActions = (
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={onClose}>Close</button>
            {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
        </div>
    );

    return (
        <Modal onClose={onClose}>
            {cartItems}
            <div className={classes['total']}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout 
                ? <Checkout onConfirm={submitOrderHandler} onCancel={onClose} /> 
                : modalActions}
        </Modal>
    )
}

export default Cart;