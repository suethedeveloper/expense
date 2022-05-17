import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useAppSelector } from "./app/hooks";
import { useEffect } from "react";

function App() {
  const showCart = useAppSelector((state) => state.ui.cartIsvisible);
  const cart = useAppSelector((state) => state.cart);
  const URL = `${process.env.REACT_APP_FIREBASE}/cart.json`;

  useEffect(() => {
    fetch(URL, {
      method: "PUT",
      body: JSON.stringify(cart)
    })
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;