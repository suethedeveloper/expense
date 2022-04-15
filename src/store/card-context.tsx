import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (_item: object) => {},
    removeItem: (_id: string) => {}
})

export default CartContext;