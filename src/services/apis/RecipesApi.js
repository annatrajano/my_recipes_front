import axios from "axios";

//Define API BASE_URL
const  REACT_APP_API_RECIPE_DB = "http://127.0.0.1:5000"; 

// Create axios instance, with specif request props(headers, auth, body, etc...)
export default axios.create({
    baseURL: REACT_APP_API_RECIPE_DB,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
});