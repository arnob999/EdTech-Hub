import { createBrowserRouter } from "react-router-dom";
import AllCourse from "../AllCourse/AllCourse";
import Blog from "../Blog/Blog";
import Courses from "../Courses/Courses";
import Home from "../Home/Home";
import Main from "../Main/Main";
import Notfound from "../NotFound/Notfound";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: "courses",
                element: <Courses></Courses>,
                children: [
                    {
                        path: "/courses",
                        element: <AllCourse></AllCourse>,
                        loader: () => fetch("http://localhost:5000/allcourses"),
                    }
                ]
            },
            {
                path: "/signin",
                element: <SignIn></SignIn>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "*",
                element: <Notfound></Notfound>
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