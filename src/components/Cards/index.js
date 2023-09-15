// Main Import
import React from "react";
import styles from "./Card.module.css"

import {BsFillArrowRightCircleFill} from 'react-icons/bs'

export default function Card({ strMeal, strMealThumb }) {
  return (
    <div className={styles.card__container}>
      <img alt={strMeal} src={strMealThumb} className={styles.card__image} />
      <h2 className={styles.card__title}>{strMeal}</h2>
      <h2 className={styles.card__name}>See details <BsFillArrowRightCircleFill/></h2>
    </div>
  );
}
