import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import AboutPage from './pages/aboutPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/about",
    Component: AboutPage
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
