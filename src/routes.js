// Main imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// Contexts - Provider
import { UserNameProvider } from "./contexts/UserContext";

// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import NewRecipe from "./pages/NewRecipe";

// React Query config
const queryClient = new QueryClient();

function AppRoutes() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <UserNameProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/new-recipe" element={<NewRecipe />} />
          </Routes>
        </UserNameProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
