// Main imports
import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Components $ utils
import FormInput from "../../components/Form";
import { mergedObject } from "../../utils/mergedObjects";

// Contexts
import UserContext from "../../contexts/UserContext";

// Requests
import { getRecipeById, updateRecipeById } from "../../services/RecipeApiRequests";

// Styles
import styles from "../NewRecipe/NewRecipe.module.css";
import Header from "../../components/Header";

export default function EditRecipe() {
  const { user } = useContext(UserContext);

  const { id } = useParams()

  const navigate = useNavigate();

  const [values, setValues] = useState({});
  
  const [recipeById, setRecipeById] = useState();

// Define useEffect policy
  useEffect(() => {
// Function responsible for get recipe by ID
    getRecipeById(id).then((res) => {
        if (res) {
          setRecipeById(res.recipe);
        }
      });
  },[id])

// Function responsible for update recipe by ID
  async function updateRecipe(values, id) {
    let mergedValues = mergedObject(recipeById, values)
    delete mergedValues.id
    await updateRecipeById(mergedValues, id)
    navigate("/home")
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
      placeholder:  recipeById ? recipeById.name : "",
      disabled: false,
      label: "Recipe name",
    },
    {
      id: 2,
      name: "typ",
      type: "text",
      placeholder: recipeById ? recipeById.typ : "",
      disabled: false,
      label: "Category",
    },
    {
      id: 3,
      name: "ingredients",
      type: "textarea",
      placeholder: recipeById ? recipeById.ingredients : "",
      disabled: false,
      label: "Ingredients",
      rows: 8,
      cols: 18,
      maxlength: "2000",
    },
    {
      id: 4,
      name: "description",
      type: "textarea",
      placeholder: recipeById ? recipeById.description : "",
      disabled: false,
      label: "Description",
      rows: 8,
      cols: 18,
      maxlength: "2000",
    },
  ];
  return recipeById && (
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
                onClick={() => updateRecipe(values, id)}
                disabled={
                  values.name ||
                  values.typ ||
                  values.ingredients ||
                  values.description
                    ? false
                    : true
                }
              >
                <p className={styles.text__bttn}>Salvar</p>
              </button>
              <button
                className={styles.bttn__back}
                type="button"
                onClick={() => redirectToHomePage()}
              >
                <p className={styles.text__bttn}>Cancelar</p>
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
