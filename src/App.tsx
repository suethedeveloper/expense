import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch, useAppSelector } from "./app/hooks";
import NotificationType from "./app/Notification";

import {fetchCartData, sendCartData} from "./store/cart-actions";

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
    dispatch(fetchCartData());
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }

    dispatch(sendCartData(cart));
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