import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useAppDispatch } from "../../app/hooks";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props: {
  id: string;
  title: string;
  price: number;
  description: string;
}) => {
  const { id, title, price, description } = props;
  const dispatch = useAppDispatch();
  const payload = { id: id, title: title, price: price };
  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart(payload));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;