import React, { Fragment, useState } from "react";
import meals from "./mealsData";
import classes from "./Meals.module.css";
import Input from "../Input/Input";

const AvailableMeals = () => {
  const [dishes, setdishes] = useState(meals);

  return (
    <Fragment>
      <section className={classes.meals}>
        <article className={classes.card}>
          {dishes.map((dish, index) => {
            const { name, description, price } = dish;
            return (
              <>
                <ul key={index}>
                  <li className={classes.meal}>
                    <div className={classes.eachmeal}>
                      <h3>{name}</h3>
                      <div className={classes.description}>{description}</div>
                      <div className={classes.price}>{price}</div>
                    </div>
                    <section className={classes.mealinput}>
                      <Input index={index} />
                    </section>
                  </li>
                </ul>
              </>
            );
          })}
        </article>
      </section>
    </Fragment>
  );
};

export default AvailableMeals;
