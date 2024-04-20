import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./containers/Login/Login";
import Home from "./containers/Home/Home";
import Clients from "./containers/Clients/Clients";
import Requests from "./containers/Requests/Requests";
import Quotes from "./containers/Quotes/Quotes";
import Jobs from "./containers/Jobs/Jobs";
import Invoices from "./containers/Invoices/Invoices";
import "./App.css";
import App from "./App";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/clients",
    element: <Clients />,
  },
  {
    path: "/requests",
    element: <Requests />,
  },
  {
    path: "/quotes",
    element: <Quotes />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/invoices",
    element: <Invoices />,
  },
  {
    path: "/login",
    element: <Login />,
  },
].map((route) => {
  if (route.path !== "/login") {
    const currentElement = route.element;
    const newElement = <App>{currentElement}</App>;
    route.element = newElement;
    return route;
  }
  return route;
});
const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div>
    <RouterProvider router={router} />
  </div>
);
