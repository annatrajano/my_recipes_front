// Main import
import React from "react";
import { GiCirclingFish, GiHotMeal, GiCupcake, GiGreenhouse } from "react-icons/gi";
import { LuBeef, LuVegan } from "react-icons/lu";
import {MdMenuBook} from "react-icons/md"

// Components
import Header from "../../components/Header";
import Button from "../../components/Button";

// Styles - Home
import styles from "./Home.module.css";

export default function Home() {
  function handleClick(category) {
    console.log(category);
  }

  const buttons = [
    {
      text: "Seafood",
      onclik: handleClick,
      icon: <GiCirclingFish />,
    },
    {
      text: "Beef",
      onclik: handleClick,
      icon: <LuBeef />,
    },
    {
      text: "Pasta",
      onclik: handleClick,
      icon: <GiHotMeal />,
    },
    {
      text: "Vegan",
      onclik: handleClick,
      icon: <LuVegan/>,
    },
    {
      text: "Vegetarian",
      onclik: handleClick,
      icon: <GiGreenhouse/>,
    },
    {
      text: "Dessert",
      onclik: handleClick,
      icon: <GiCupcake />,
    },
    {
      text: "My recipes",
      onclik: handleClick,
      icon: <MdMenuBook />,
    },
  ];

  return (
    <>
      <Header userName={"annaBia"} />
      <section className={styles.section__container}>
        {buttons.map((item) => {
          return (
            <Button text={item.text} onClick={item.onclik} icon={item.icon} />
          );
        })}
      </section>
    </>
  );
}
