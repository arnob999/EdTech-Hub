import { createBrowserRouter } from "react-router-dom";
import AllCourse from "../AllCourse/AllCourse";
import Blog from "../Blog/Blog";
import CourseDetailsPage from "../CourseDetailsPage/CourseDetailsPage";
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
                path: "/courses",
                element: <Courses></Courses>,
                children: [
                    {//To show Course Overview At a glance
                        path: "/courses",
                        element: <AllCourse></AllCourse>,
                        loader: () => fetch("http://localhost:5000/allcourses"),
                    },
                    { //Load Category WIse
                        path: '/courses/category/:id',
                        element: <AllCourse></AllCourse>,
                        loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
                    },
                    {//OPen on see details
                        path: 'courses/:id',
                        element: <CourseDetailsPage></CourseDetailsPage>,
                        loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
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