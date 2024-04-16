import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { 
  createBrowserRouter, 
  RouterProvider
} from 'react-router-dom';
import EntryPage from './pages/EntryPage/EntryPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EntryPage />
  },
  {
    path: "/home",
    element: <HomePage />
  },
]);

const root = createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

