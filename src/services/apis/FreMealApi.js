import axios from "axios";

//Define API BASE_URL
const  REACT_APP_API_MEAL_DB = "https://www.themealdb.com/api/json/v1/1/"; 

// Create axios instance, with specif request props(headers, auth, body, etc...)
export default axios.create({
    baseURL: REACT_APP_API_MEAL_DB,
});