import React, { Fragment, useState } from "react";
import classes from "../Meals/Meals.module.css";

const Input = ({ index }) => {
  return (
    <Fragment>
      <form key={index} className={classes.form}>
        <div className={classes.input}>
          <label htmlFor="change">Amount</label>
          <input type="number" min={1} max={5} step={1} defaultValue={1} />
        </div>
        <button>+ Add</button>
      </form>
    </Fragment>
  );
};

export default Input;
