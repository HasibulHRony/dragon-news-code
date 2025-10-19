import { createBrowserRouter, Navigate } from "react-router";
import { HomeLayout } from "../Layouts/HomeLayout";
import { Home } from "../Pages/Home";
import { CategoryNews } from "../Pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to={'/category/0'}></Navigate> 
            },
            {
                path: '/home',
                element: <Navigate to={'/category/0'}></Navigate> 
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ()=>fetch("/news.json"), 
            },
        ]
    },
    {
        path: '/auth',
        element: <h2>auth layout</h2>
    },
    {
        path: '/news',
        element: <h2>News layout</h2>
    },
    {
        path: '/*',
        element: <h2>error-404</h2>
    },
])

export default router;