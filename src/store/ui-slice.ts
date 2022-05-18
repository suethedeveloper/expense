import { createSlice,  PayloadAction} from "@reduxjs/toolkit";
import NotificationType from "../app/Notification";

type InitialUiState = {
  cartIsvisible: boolean;
  notification: NotificationType;
};

const initialState: InitialUiState = { cartIsvisible: false, notification: {status: "", title: "", message: ""} };
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggle(state) {
      state.cartIsvisible = !state.cartIsvisible;
    },
    showNotification(state, action: PayloadAction<NotificationType>) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      }
    }
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;