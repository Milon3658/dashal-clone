import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import Locations from "../Pages/Locations/Locations";
import Favorite from "../Pages/Favorite/Favorite";
import Cart from "../Pages/Cart/Cart";
import Profile from "../Pages/Profile/Profile";
import Category from "../Pages/Category/Category";
import AllProducts from "../Pages/AllProducts/AllProducts";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import SignUp from "../Pages/Credential/SignUp";
import Login from "../Pages/Credential/Login";
import CheckOut from "../Pages/CheckOut/CheckOut";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Layout></Layout>,
        children:[
            {
                path:"/",
                element:<HomePage></HomePage>
            },
            {
                path:"/location",
                element:<Locations></Locations>
            },
            {
                path:"/favorite",
                element:<Favorite></Favorite>
            },
            {
                path:"cart",
                element:<Cart></Cart>
            },
            {
                path:"/profile",
                element:<Profile></Profile>
            },
            {
                path:"/category",
                element:<Category></Category>
            },
            {
                path:"/allproducts",
                element:<AllProducts></AllProducts>
            },
            {
                path:"/productdetails",
                element:<ProductDetails></ProductDetails>
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"/checkout",
                element:<CheckOut></CheckOut>
            },
            {
                path:"*",
                element:<h1>404</h1>
            }
        ]
    }
])
export default router;