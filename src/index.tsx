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
import AddClientForm from "./containers/Clients/AddClientForm";
import AddQuoteForm from "./containers/Quotes/AddQuoteForm";
import AddRequestForm from "./containers/Requests/AddRequestForm";
import AddJobForm from "./containers/Jobs/AddJobForm";
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
    path: "/clients/add-client",
    element: <AddClientForm />,
  },
  {
    path: "/requests",
    element: <Requests />,
  },
  {
    path: "/requests/add-request",
    element: <AddRequestForm />,
  },
  {
    path: "/quotes",
    element: <Quotes />,
  },
  {
    path: "/quotes/add-quote",
    element: <AddQuoteForm />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/jobs/add-job",
    element: <AddJobForm />,
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
    console.log(route);
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
