import { PayloadAction} from "@reduxjs/toolkit";
import NotificationType from "../app/Notification";
import CartType from "../app/Cart";
import type { AppDispatch } from "./index";

import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
    return async (dispatch: AppDispatch) => {
        const fetchData = async() => {
            const URL = `${process.env.REACT_APP_FIREBASE}/cart.json`;
            const response = await fetch(URL);
            
            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }
            const data = await response.json();
            
            return data;
        };

        try {
            const cartData = await fetchData(); 
            dispatch(cartActions.replaceCart(cartData));
        } catch(error) {
          dispatch(
            uiActions.showNotification({
              status: 'error',
              title: 'Error!',
              message: 'Fetching cart data failed!',
            })
          );
        }
    };
};

export const sendCartData = (cart: CartType) => {
    return async(dispatch: (uiActions: PayloadAction<NotificationType>) => void) => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!"
        })
      );
  
      const sendRequest = async() => {
        const URL = `${process.env.REACT_APP_FIREBASE}/cart.json`;
        const response = await fetch(URL, {
          method: "PUT",
          body: JSON.stringify(cart)
        });
    
        if (!response.ok) {
          throw new Error("Sending cart data faild!");
        }
      };
  
      try {
        await sendRequest();
  
        dispatch(uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!"
        }));
      } catch(error) {
        dispatch(uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data faild!"
        }));
      }
    }
  };

function dispatch(arg0: { payload: any; type: string; }) {
    throw new Error("Function not implemented.");
}
