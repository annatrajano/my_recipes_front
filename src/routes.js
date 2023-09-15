// Main imports
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import NewRecipe from "./pages/NewRecipe";

// Components
import Footer from "./components/Footer";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/new-recipe" element={<NewRecipe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
