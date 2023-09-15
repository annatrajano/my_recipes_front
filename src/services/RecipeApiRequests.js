// Import axios from specific API definition
import axios from "./apis/RecipesApi"


// GET Method Request for Recipes
async function getAllRecipes() {
  try {
    const response = await axios.get(`/recipes`);
    return response.data.recipes;
  } catch (error) {
    console.log(error.message);
  }
}

// POST Method Request for Recipe
async function createRecipe(data) {
  try {
    const response = await axios.post(
      `/recipe`,
      JSON.stringify(data),
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

// DELETE Method Request by Recipe Id
async function deleteRecipeById(id) {
  try {
    const response = await axios.delete(`/recipe/${id}`);
    console.log(response)
    return response.data;
  } catch (error) {
    console.log("Não foi possivel deletar esse caso!");
  }
}

export {getAllRecipes, createRecipe, deleteRecipeById}