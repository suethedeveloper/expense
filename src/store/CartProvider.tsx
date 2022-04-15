import { useReducer } from "react";
import { ReactChildren } from "react";
import CartContext from "./card-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

 const cartReducer = (state: {items: any, totalAmount: number}, action: any) =>  {
     if (action.type === "ADD") {
         const updatedItems = state.items.concat(action.item);
         const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount; 
         return {
             items: updatedItems,
             totalAmount: updatedTotalAmount
         }
     }
     return defaultCartState;
 }

const CartProvider = (props: {children: ReactChildren}) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    //@ts-ignore
    const addItemToCartHandler = (item: object) => {
        dispatchCartAction({type:'ADD', item});
    };
    //@ts-ignore
    const removeItemToCartHandler = (id: string) => {
        dispatchCartAction({type:'REMOVE', id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    };
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;
