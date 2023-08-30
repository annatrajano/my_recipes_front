// Import axios from specific API definition
import axios from "./apis/FreMealApi";


// GET Method Request for Cases
async function getAllFoodsByCategory(category) {
  try {
    const response = await axios.get(`filter.php?c=${category}`);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export {getAllFoodsByCategory}