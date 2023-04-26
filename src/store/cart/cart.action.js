import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (bool) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool);

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== existingCartItem.id);
  }
  return cartItems.map((cartItem) => {
    return cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};

const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

export const addItemToCart = (cartItems, productToAdd) => {
  return createAction(
    CART_ACTION_TYPES.SET_CART_ITEMS,
    addCartItem(cartItems, productToAdd)
  );
};

export const removeItemFromCart = (cartItems, cartItemToRemove) =>
  createAction(
    CART_ACTION_TYPES.SET_CART_ITEMS,
    removeCartItem(cartItems, cartItemToRemove)
  );

export const clearItemFromCart = (cartItems, cartItemToClear) =>
  createAction(
    CART_ACTION_TYPES.SET_CART_ITEMS,
    clearCartItem(cartItems, cartItemToClear)
  );
