import {
    createBrowserRouter,
  } from "react-router-dom";
import MAinComponent from "../MainComponent/MAinComponent";
import Home from "../Pages/Home/Home";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SingUp/SignUp";
import ProductDetails from "../Components/ProductDetails/ProductDetails";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MAinComponent></MAinComponent>,
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
          path: "/productDetails/Detail/:id",
          element: <ProductDetails></ProductDetails>,
          loader: () => fetch('/events.json')
        }
      ]
    },
  ]);

