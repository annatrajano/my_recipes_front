// Main imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import NewRecipe from "./pages/NewRecipe";

// React Query config
const queryClient = new QueryClient();

function AppRoutes() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/new-recipe" element={<NewRecipe />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default AppRoutes;
