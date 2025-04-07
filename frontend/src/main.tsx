import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/stylesheets.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InsurancePage from "./views/InsurancePage.tsx";
import InsuranceFormOne from "./views/InsuranceFormOne.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/seguros", element: <InsurancePage /> },
  { path: "/cotizar-seguro", element: <InsuranceFormOne /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
