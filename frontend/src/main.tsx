import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/stylesheets.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InsurancePage from "./views/InsurancePage.tsx";
import InsuranceFormOne from "./views/InsuranceFormOne.tsx";
import CarInsFormPage from "./views/CarInsFormPage.tsx";
import MotoFormsPage from "./views/MotoFormsPage.tsx";
import VehicleBudgetPage from "./views/VehicleBudgetPage.tsx";
import ChooseBudgetPage from "./views/ChooseBudgetPage.tsx";
import ShipBudgetPage from "./views/ShipBudgetPage.tsx";
import HomeLossPage from "./views/HomeLossPage.tsx";
import WheelRobberyPage from "./views/WheelRobberyPage.tsx";
import BrokenGlassPage from "./views/BrokenGlassPage.tsx";
import CarAccidentPage from "./views/CarAccidentPage.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/seguros", element: <InsurancePage /> },
  { path: "/cotizar-seguro", element: <InsuranceFormOne /> },
  { path: "/alta-auto", element: <CarInsFormPage /> },
  { path: "/alta-moto", element: <MotoFormsPage /> },
  { path: "/presupuestar-auto", element: <VehicleBudgetPage /> },
  { path: "/presupuestar", element: <ChooseBudgetPage /> },
  { path: "/presupuestar-embarcacion", element: <ShipBudgetPage /> },
  { path: "/siniestro-hogar", element: <HomeLossPage /> },
  { path: "/robo-de-rueda", element: <WheelRobberyPage /> },
  { path: "/cristal-roto", element: <BrokenGlassPage /> },
  { path: "/siniestro-vial", element: <CarAccidentPage /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
