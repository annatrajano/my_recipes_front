// Main import
import React from "react";

// Icons
import { BiFoodMenu } from "react-icons/bi";

//  Styles - Header
import styles from "./Header.module.css";

export default function Header({ userName, redirectToLoginPage }) {
  return (
    <header className={styles.header__container}>
      <h1 className={styles.title__home} onClick={() => redirectToLoginPage()}>
        My Recipes <BiFoodMenu />{" "}
      </h1>
      <h2 className={styles.username__text}>{userName}</h2>
    </header>
  );
}
