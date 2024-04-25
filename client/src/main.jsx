import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemesPage from "./pages/ThemesPage";
import QuizzPage from "./pages/QuizzPage";
import ScoresPage from "./pages/ScoresPage";
import DifficultiesPage from "./pages/DifficultiesPage";
import HomePage from "./pages/HomePage/HomePage";
import NumberQuestions from './pages/NumberQuestions'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/themespage", element: <ThemesPage /> },
      { path: "/numberquestions", element: <NumberQuestions />},
      { path: "/difficultiespage/:id", element: <DifficultiesPage /> },
      { path: "/difficultiespage/:id/:difficulty", element: <QuizzPage /> },
      { path: "/scorespage", element: <ScoresPage /> },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);