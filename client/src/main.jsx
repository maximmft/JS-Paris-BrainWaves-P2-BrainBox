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
import AvatarPage from "./pages/AvatarPage";
import { UsernameProvider } from "./contexts/UsernameContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/avatarpage", element: <AvatarPage /> },
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
    <UsernameProvider>
    <RouterProvider router={router} />
    </UsernameProvider>
  </React.StrictMode>
);