// Main Import
import React from "react";
import styles from "./Card.module.css"

export default function Card({ strMeal, strMealThumb }) {
  return (
    <div className={styles.card__container}>
      <img alt={strMeal} src={strMealThumb} className={styles.card__image} />
      <h2 className={styles.card__name}>{strMeal}</h2>
    </div>
  );
}
