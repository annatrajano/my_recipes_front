// Main import
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { UserContextProvider } from "./contexts/UserContext";

// Style
import "./index.css";

// Routes
import AppRoutes from "./routes";

// React Query config
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <AppRoutes />
      </UserContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
