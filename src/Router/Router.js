import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import Locations from "../Pages/Locations/Locations";
import Favorite from "../Pages/Favorite/Favorite";
import Cart from "../Pages/Cart/Cart";
import Profile from "../Pages/Profile/Profile";

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
            }
        ]
    }
])
export default router;