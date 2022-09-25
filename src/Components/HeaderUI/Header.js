import React, { Fragment } from "react";
// import meals from '../mealsData'
import background from "../../Assets/meals.jpg";
import classes from "./Header.module.css";
import Cart from "./Cart";

const Header = () => {
  return (
    <Fragment>
      <section className={classes.section}>
        <header className={classes.header}>
          <h1>React meals</h1>
          <Cart />
        </header>
      </section>
      <div className={classes["main-image"]}>
        <img src={background} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
