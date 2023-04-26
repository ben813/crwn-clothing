import "./checkout-item.styles.jsx";
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  ImageContainer,
  QuantitySpan,
  RemoveButton,
  Value,
} from "./checkout-item.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector.js";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.action.js";
const CheckoutItem = ({ checkoutItem }) => {
  const dispatch = useDispatch();
  const { imageUrl, name, price, quantity } = checkoutItem;
  const cartItems = useSelector(selectCartItems);
  const clearItemHandler = () =>
    dispatch(clearItemFromCart(cartItems, checkoutItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, checkoutItem));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, checkoutItem));
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <BaseSpan>{price}</BaseSpan>
      <QuantitySpan>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </QuantitySpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
