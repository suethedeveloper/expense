import { Fragment, useEffect } from "react";
import {uiActions} from "./store/ui-slice";
import { useSelector } from "react-redux";

import { useAppDispatch, useAppSelector } from "./app/hooks";
import NotificationType from "./app/Notification";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useAppDispatch();
  const showCart = useAppSelector((state) => state.ui.cartIsvisible);
  const cart = useAppSelector((state) => state.cart);
  const notification = useSelector((state: {ui: {notification: NotificationType}}) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async() => {
      dispatch(uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!"
      }));

      const URL = `${process.env.REACT_APP_FIREBASE}/cart.json`;
      const response = await fetch(URL, {
        method: "PUT",
        body: JSON.stringify(cart)
      });

      if (!response.ok) {
        // throw new Error("Sending cart data faild!");
        // dispatch(uiActions.showNotification({
        //   status: "error",
        //   title: "Error!",
        //   message: "Sending cart data faild!"
        // })); //move to catch block instead
        throw new Error("Sending cart data faild!");
      }

      // const responseData = await response.json(); //we don't care this data

      dispatch(uiActions.showNotification({
        status: "success",
        title: "Success!",
        message: "Sent cart data successfully!"
      }));
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch(error => {
      console.log("error", error);
      dispatch(uiActions.showNotification({
        status: "error",
        title: "Error!",
        message: "Sending cart data faild!"
      }));
    });
  }, [cart, dispatch]); //dispatch will never trigger this useffect since redux knows it's a function?? need to double check!

  return (
    <Fragment>
      {notification && 
        <Notification 
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      }
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;