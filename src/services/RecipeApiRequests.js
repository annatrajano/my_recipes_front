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

// GET Method Request for Recipes By Id
async function getRecipeById(id) {
  try {
    const response = await axios.get(`/recipe/${id}`);
    return response.data;
  } catch (error) {
    console.log("Não foi possivel deletar esse caso!");
  }
}
// POST Method Request for Recipe
async function createRecipe(data) {
  try {
    const response = await axios.post(
      `/recipe`,
      JSON.stringify(data),
    );
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

// PUT Method Request for Recipe By Id
async function updateRecipeById(data, id) {
  try {
    const response = await axios.put(
      `/recipe/${id}`,
      JSON.stringify(data),
    );
    return response;
  } catch (error) {
    console.log(error.message);
  }
}


// DELETE Method Request Recipe by Id
async function deleteRecipeById(id) {
  try {
    const response = await axios.delete(`/recipe/${id}`);
    return response.data;
  } catch (error) {
    console.log("Não foi possivel deletar esse caso!");
  }
}

export {getAllRecipes, getRecipeById, createRecipe, updateRecipeById, deleteRecipeById}