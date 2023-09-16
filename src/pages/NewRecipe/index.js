// Main imports
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Components
import FormInput from "../../components/Form";

// Contexts
import UserContext from "../../contexts/UserContext";

// Requests
import { createRecipe } from "../../services/RecipeApiRequests";

// Styles
import styles from "./NewRecipe.module.css";
import Header from "../../components/Header";

export default function NewRecipe() {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const [values, setValues] = useState({});

  async function handleSubmit() {
    await createRecipe(values);
  }

  function redirectToLoginPage() {
    navigate("/");
  }

  function redirectToHomePage() {
    navigate("/home");
  }

  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  const firstInputSection = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: `Lasagna`,
      disabled: false,
      label: "Recipe name",
      required: true,
      errorMessage: "This field is required",
    },
    {
      id: 2,
      name: "typ",
      type: "text",
      placeholder: `Pasta`,
      disabled: false,
      label: "Category",
      required: true,
      errorMessage: "This field is required",
    },
    {
      id: 3,
      name: "ingredients",
      type: "textarea",
      placeholder: `1 pound sweet Italian sausage, ¾ pound lean ground beef, ½ cup minced onion, 2 cloves garlic, crushed...`,
      disabled: false,
      label: "Ingredients",
      required: true,
      errorMessage: "This field is required",
      rows: 8,
      cols: 18,
      maxlength: "2000",
    },
    {
      id: 4,
      name: "description",
      type: "textarea",
      placeholder: `The assembled lasagna should take about 50 minutes to cook in an oven preheated to 375 degrees F. Cover it with foil for the first 25 minutes, then let it cook uncovered for the final 25 minutes. Also, it's important to let the lasagna rest at room temperature for about 15 minutes before you cut into it...`,
      disabled: false,
      label: "Description",
      required: true,
      errorMessage: "This field is required",
      rows: 8,
      cols: 18,
      maxlength: "2000",
    },
  ];
  return (
    <>
      <Header userName={user} redirectToLoginPage={redirectToLoginPage} />
      <div className={styles.new_recipe__container}>
        <section>
          <form className={styles.form__container}>
            {firstInputSection.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <div className={styles.bttn__container}>
              <button
                className={styles.bttn__create}
                type="button"
                onClick={handleSubmit}
                disabled={
                  values.name &&
                  values.typ &&
                  values.ingredients &&
                  values.description
                    ? false
                    : true
                }
              >
                <p className={styles.text__bttn}>Cadastrar</p>
              </button>
              <button
                className={styles.bttn__back}
                type="submit"
                onClick={() => redirectToHomePage()}
              >
                <p className={styles.text__bttn}>Voltar à página inicial</p>
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
