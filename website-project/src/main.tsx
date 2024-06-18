import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root.tsx"
import ErrorPage from "./error-page.tsx"
import EqualZeroMain from "./routes/EqualZeroMain.tsx"

const router = createBrowserRouter([
  {
    path: "/Main",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "equalzero/",
        element: <EqualZeroMain />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
