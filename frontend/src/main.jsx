import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Authprovider } from "./contexts/Auth";

import App from "./App";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import connexion from "./services/connexion";
import Administration from "./pages/Administration";
import AnnoncePage from "./pages/AnnoncePage";
import DashboardPage from "./pages/DashboardPage";
import DetailAnnoncePage from "./pages/DetailAnnoncePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => {
      return connexion.get("/apps").then((response) => {
        return response.data;
      });
    },
  },
  {
    path: "/nouvelutilisateur",
    element: <UserPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/administration/",
    element: <Administration />,
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
      {
        path: "annonces/:id",
        element: <AnnoncePage />,
      },
    ],
  },

  {
    path: "/homes",
    element: <HomePage />,
    loader: () => {
      return connexion.get("/homes").then((response) => {
        return response.data;
      });
    },
  },

  {
    path: "/homes/:homeId",
    element: <DetailAnnoncePage />,
    loader: async ({ params }) => {
      const response = await connexion.get(`homes/${params.homeId}`);
      return response.data;
    },
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>
);
