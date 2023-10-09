import {
    createBrowserRouter,
  } from "react-router-dom";
import MAinComponent from "../MainComponent/MAinComponent";
import Home from "../Pages/Home/Home";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SingUp/SignUp";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import PrivetRoute from "../Components/PrivetRoute/PrivetRoute";
import ErrorPage from "../Pages/ErrorPage";
import Support from "../Pages/Support/Support";
import Geallary from "../Pages/Grallary/Geallary";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MAinComponent></MAinComponent>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
        {
          path: "/support",
          element: <Support></Support>,
          loader: () => fetch("/supporters.json")
        },
        {
          path: "/portfolios",
          element: <Geallary></Geallary>,
        },
        {
          path: "/productDetails/Detail/:id",
          element: <PrivetRoute><ProductDetails></ProductDetails></PrivetRoute>,
          loader: () => fetch('/events.json')
        }
      ]
    },
  ]);

