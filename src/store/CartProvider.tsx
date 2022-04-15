import { ReactChildren } from "react";
import CartContext from "./card-context";

const CartProvider = (props: {children: ReactChildren}) => {
    //@ts-ignore
    const addItemToCartHandler = (item: object) => {};
    //@ts-ignore
    const removeItemToCartHandler = (id: string) => {};

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    };
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;
