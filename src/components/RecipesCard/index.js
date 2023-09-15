// Main Import
import React from "react";

// Style
import styles from "./RecipesCard.module.css";

// Icons
import { RiDeleteBin6Fill } from "react-icons/ri";
import { AiTwotoneEdit } from "react-icons/ai";

export default function RecipesCard({
  id,
  name,
  typ,
  ingredients,
  description,
  deleteRecipe,
  updateRecipe,
}) {
  return (
    <div className={styles.card__container}>
      <h1 className={styles.card__title}>{name}</h1>
      <h2 className={styles.card__name}>
        <h2 className={styles.card__item}>Category:</h2> {typ}
      </h2>
      <h2 className={styles.card__name}>
        <h2 className={styles.card__item}>Ingredients:</h2> {ingredients}
      </h2>
      <h2 className={styles.card__name}>
        <h2 className={styles.card__item}>Description:</h2> {description}
      </h2>
      <div className={styles.bttn__container}>
        <button
          onClick={() => deleteRecipe(id)}
          className={styles.delete__bttn}
        >
          <RiDeleteBin6Fill />
        </button>
        <button
          onClick={() => updateRecipe(id)}
          className={styles.update__bttn}
        >
          <AiTwotoneEdit />
        </button>
      </div>
    </div>
  );
}
