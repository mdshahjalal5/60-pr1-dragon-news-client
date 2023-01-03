import { createBrowserRouter } from "react-router-dom";
import Category from "../components/Category.Catogory";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Login from "../components/Login";
import Main from "../components/Main";
import NewsSummary from "../components/NewsSummary";
import Registration from "../components/Registration";

export  const router = createBrowserRouter([
    {
        path:'/', 
        element: <Main></Main>, 
        errorElement:<ErrorPage></ErrorPage>, 
        children:[
            {
                path:'/', 
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')
            }, 
            {
                path:'/category/:Id', 
                element: <Category></Category> ,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.Id}`)
            }, 
            {
                path:'/news/:id', 
                loader: function({params}){
                    return fetch(`http://localhost:5000/news/${params.id}`);
                }, 
                element: <NewsSummary></NewsSummary>
            }, 
            {
                path:'/login', 
                element:<Login></Login>, 
            }, 
            {
                path:'/registration', 
                element:<Registration/>
            }

        ], 
    },
])