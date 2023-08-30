// Main import
import React, { useContext, useState } from "react";
import {
  GiCirclingFish,
  GiHotMeal,
  GiCupcake,
  GiGreenhouse,
} from "react-icons/gi";
import { LuBeef, LuVegan } from "react-icons/lu";
import { MdMenuBook } from "react-icons/md";

// Components
import Header from "../../components/Header";
import Button from "../../components/Button";

// Requests
import { getAllFoodsByCategory } from "../../services/FreeMealApiRequests";

// Contexts
import UserContext from "../../contexts/UserContext";

// Styles - Home
import styles from "./Home.module.css";
import Card from "../../components/Cards";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  const { user } = useContext(UserContext);

  async function handleClick(category) {
    const response = await getAllFoodsByCategory(category);
    setRecipes(response.meals.splice(0, 20));
    console.log(response.meals.splice(0, 20));
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
      icon: <LuVegan />,
    },
    {
      text: "Vegetarian",
      onclik: handleClick,
      icon: <GiGreenhouse />,
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
      <Header userName={user} />
      <section className={styles.section__container}>
        {buttons.map((item) => {
          return (
            <Button text={item.text} onClick={item.onclik} icon={item.icon} />
          );
        })}
      </section>
      <section className={styles.section_food__container}>
        {recipes.length > 0 ? (
          recipes.map((item) => {
            return (
              <Card strMeal={item.strMeal} strMealThumb={item.strMealThumb} />
            );
          })
        ) : (
          <h2>
            Clique no + para adicionar uma nova receita ou selecione as
            categorias
          </h2>
        )}
      </section>
    </>
  );
}
