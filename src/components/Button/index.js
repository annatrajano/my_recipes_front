// Main import
import React from "react";

// Styles - Button
import styles from "./Button.module.css";

export default function Button({ text, onClick, icon }) {
  return (
    <button
      className={styles.bttn__category}
      type="button"
      onClick={() => onClick(text)}
    >
      <p>{icon}</p>
      <p className={styles.text_icon__category}>{text}</p>
    </button>
  );
}
