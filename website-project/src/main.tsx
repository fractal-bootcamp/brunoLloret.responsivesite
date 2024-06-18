import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Root from "./routes/root.tsx"
import ErrorPage from "./error-page.tsx"
import EqualZeroMain from "./routes/sites/EqualZero/EqualZeroMain.tsx"
import DemoWelcomePage from './routes/sites/EqualZero/DemoWelcomePage.tsx';
import Epigraph from "./routes/sites/EqualZero/Epigraph.tsx"

const router = createBrowserRouter([
  {
    path: "/Main",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Main/=0",
    element: <EqualZeroMain />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Main/=0/Demo",
    element: <DemoWelcomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Main/=0/Demo/Epigraph",
    element: <Epigraph />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
