import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Authprovider } from "./contexts/Auth";

import App from "./App";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import connexion from "./services/connexion";
import Administration from "./pages/Administration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => {
      return connexion.get("/apps").then((response) => {
        return response.data;
      });
      // loader: async () => {
      // const consultant = await axios
      // .get(`${import.meta.env.VITE_BACKEND_URL}/api/apps`)
      // .then((res) => res.data);
      // return consultant;
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
    path: "/administration",
    element: <Administration />,
  },
  {
    path: "/homes",
    element: <HomePage />,
    loader: async () => {
      const consultant = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/homes`)
        .then((res) => res.data);
      return consultant;
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
