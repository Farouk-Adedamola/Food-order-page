import React from "react";
import CartIcon from "../../Assets/CartIcon";
import classes from "./Header.module.css";

const Cart = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default Cart;
