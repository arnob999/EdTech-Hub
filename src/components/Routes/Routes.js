import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Courses from "../Courses/Courses";
import Home from "../Home/Home";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Main from "../Main/Main";
import Notfound from "../NotFound/Notfound";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: "*",
                element: <Notfound></Notfound>
            },
            {
                path: "courses",
                element: <LeftSideNav></LeftSideNav>,
                children: [
                    {

                    }
                ]
            }

        ]

    }
])

{
    /* {
        path:"",
        element:
    }
    */
}