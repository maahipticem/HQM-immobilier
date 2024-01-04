import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: async () => {
      const consultant = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/apps`)
        .then((res) => res.data);
      return consultant;
    },
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
