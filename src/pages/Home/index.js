// Main import
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Icons
import {
  GiCirclingFish,
  GiHotMeal,
  GiCupcake,
  GiGreenhouse,
} from "react-icons/gi";
import { LuBeef, LuVegan } from "react-icons/lu";
import { MdMenuBook } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";

// Components
import Header from "../../components/Header";
import Button from "../../components/Button";
import Card from "../../components/Cards";
import RecipesCard from "../../components/RecipesCard";

// Requests
import { getAllFoodsByCategory } from "../../services/FreeMealApiRequests";
import {
  getAllRecipes,
  deleteRecipeById,
} from "../../services/RecipeApiRequests";

// Contexts
import UserContext from "../../contexts/UserContext";

// Styles - Home
import styles from "./Home.module.css";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  const { user } = useContext(UserContext);

  const navigate = useNavigate();

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

  function redirectToLoginPage() {
    navigate("/");
  }

  function redirectToNewRecipePage() {
    navigate("/new-recipe");
  }

  // Function responsible for select Recipe by category
  async function handleClick(category) {
    if (category === "My recipes") {
      const response = await getAllRecipes();
      setRecipes(response);
    } else {
      const response = await getAllFoodsByCategory(category);
      setRecipes(response);
    }
  }

  // Function responsible for delete recipe by id
  async function deleteRecipe(id) {
    await deleteRecipeById(id);
    const allRecipes = await getAllRecipes();
    setRecipes(allRecipes);
  }

// Function responsible for redirect user to EditRecipe Page
function redirectToEditRecipePage(id) {
  navigate(`/edit-recipe/${id}`)
}

  return (
    <>
      <Header userName={user} redirectToLoginPage={redirectToLoginPage} />
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
            return item.strMeal ? (
              <Card strMeal={item.strMeal} strMealThumb={item.strMealThumb} />
            ) : (
              <RecipesCard
                id={item.id}
                name={item.name}
                typ={item.typ}
                ingredients={item.ingredients}
                description={item.description}
                deleteRecipe={deleteRecipe}
                redirectToEditRecipePage={redirectToEditRecipePage}
              />
            );
          })
        ) : (
          <h2 className={styles.home_text}>
            Clique no botão + para adicionar uma nova receita ou selecione as
            categorias
          </h2>
        )}
      </section>
      <section className={styles.section_food_bttn__container}>
        <button className={styles.plus_bttn__container}>
          <AiFillPlusCircle
            className={styles.plus_bttn}
            onClick={() => redirectToNewRecipePage()}
          />
        </button>
      </section>
    </>
  );
}
