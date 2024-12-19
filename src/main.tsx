import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Login from "./root/login";

//import Router from "./root/router";
import Games from "./root/Games";
import Companies from "./root/companies";
import Error from "./root/error";
import Router from "./root/router";
import { loader as gameLoader } from "./root/Games";
import {loader as companiesLoader} from "./root/companies";
import Game from "./root/Game";
import { loader as loaderGame } from "./root/Game";
import Company, { loader as loaderCompany } from "./root/Company";
import EditGame,{action as editAction} from "./root/EditGame";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Router/>,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/games",
    element: <Games/>,
    loader: gameLoader,
    children: [
      {
        path: "/games/:gameId",
        element: <Game/>,
        loader: loaderGame,
       
      },
      {
        path: "/games/:gameId/edit",
        element: <EditGame/>,
        loader: loaderGame,
        action: editAction,
       
      },



    ]
  },
  {
    path: "/companies",
    element: <Companies/>,
    loader: companiesLoader,
  },
  
  {
    path: "/games/:gameId/edit",
    element: <EditGame/>,
   // loader: loaderGame,
   
  },
  {
    path: "/companies/:companyId",
    element: <Company/>,
    loader: loaderCompany,
   
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
   
  </React.StrictMode>
);
