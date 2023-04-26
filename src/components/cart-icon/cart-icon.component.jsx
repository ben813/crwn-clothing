import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();
  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
