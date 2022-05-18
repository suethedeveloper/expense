import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

export type Item = {
  id: string;
  price: number;
  quantity: number;
  totalPrice: number;
  title: string;
};

type InitialCartState = {
  id: number | "";
  items: Item[];
  totalQuantity: number;
};

const initialState: InitialCartState = {
  id: "",
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem: Item | undefined = state.items.find(
        (item) => item.id === id
      );
      state.totalQuantity--;
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
        }
      }
    },
  },
});

// const sendCartData = (cartData: any) => {
//   return (dispatch: () => void) => {
//     dispatch(
//       uiActions.showNotification({
//         status: "pending",
//         title: "Sending...",
//         message: "Sending cart data!"
//       })
//     );
//   }
// };
// (alias) const uiActions: CaseReducerActions<{
//   toggle(state: WritableDraft<InitialUiState>): void;
//   showNotification(state: WritableDraft<InitialUiState>, action: {
//       ...;
//   }): void;
// }>

export const sendCartData = (cart: any) => {
  return async(dispatch: (uiActions: any) => void) => {
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
      console.log("error", error);
      dispatch(uiActions.showNotification({
        status: "error",
        title: "Error!",
        message: "Sending cart data faild!"
      }));
    }
  }
};

export const cartActions = cartSlice.actions;

export default cartSlice;