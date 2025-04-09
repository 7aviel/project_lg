import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/stylesheets.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InsurancePage from "./views/InsurancePage.tsx";
import InsuranceFormOne from "./views/InsuranceFormOne.tsx";
import CarInsFormPage from "./views/CarInsFormPage.tsx";
import MotoFormsPage from "./views/MotoFormsPage.tsx";
import CarBudgetPage from "./views/CarBudgetPage.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/seguros", element: <InsurancePage /> },
  { path: "/cotizar-seguro", element: <InsuranceFormOne /> },
  { path: "/alta-auto", element: <CarInsFormPage /> },
  { path: "/alta-moto", element: <MotoFormsPage /> },
  { path: "/presupuestar-auto", element: <CarBudgetPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
