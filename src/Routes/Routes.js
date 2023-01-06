import { createBrowserRouter } from "react-router-dom";
import Category from "../components/Category.Catogory";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Login from "../components/Login";
import Main from "../components/Main";
import NewsSummary from "../components/NewsSummary";
import PrivateRoute from "../components/PrivateRoute";
import Profile from "../components/Profile";
import Registration from "../components/Registration";
import TermsAndCondition from "../components/TermsAndCondition";

export  const router = createBrowserRouter([
    {
        path:'/', 
        element: <Main></Main>, 
        errorElement:<ErrorPage></ErrorPage>, 
        children:[
            {
                path:'/', 
                element: <Home></Home>,
                loader: () => fetch('https://62-clo-server.vercel.app/news')
            }, 
            {
                path:'/category/:Id', 
                element: <Category></Category> ,
                loader: ({ params }) => fetch(`https://62-clo-server.vercel.app/category/${params.Id}`)
            }, 
            {
                path:'/news/:id', 
                loader: function({params}){
                    return fetch(`https://62-clo-server.vercel.app/news/${params.id}`);
                }, 
                element: <PrivateRoute> <NewsSummary></NewsSummary></PrivateRoute>
            }, 
            {
                path:'/login', 
                element:<Login></Login>, 
            }, 
            {
                path:'/registration', 
                element:<Registration/>
            }, 
            {
                path:'/profile', 
                element:<Profile></Profile>
            },

             {
                path:'/terms', 
                element:<TermsAndCondition></TermsAndCondition>
             },

        ], 
    },
])