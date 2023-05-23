import { createBrowserRouter } from 'react-router-dom';
import Main from '../LayOuts/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Error from '../Pages/Error/Error';
import Blogs from '../Pages/Blogs/Blogs';
import AllToys from '../Pages/AllToys/AllToys';
import AddAToy from '../Pages/AddAToy/AddAToy';
import MyToys from '../Pages/MyToys/MyToys';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Updatedata from '../Pages/UpdateData/updatedata';
import SingleToyDetails from '../Pages/SingleToyDetails/SingleToyDetails';
import CatDetails from '../Pages/CatDetails/CatDetails';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>,
                // loader: () => fetch('http://localhost:5000/allToys')

            },
            {
                path: '/addAToy',
                element: <PrivateRoute> <AddAToy></AddAToy></PrivateRoute>,

            },
            {
                path: '/myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>,
                // loader: () => fetch('http://localhost:5000/myToys')
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            // {
            //     path: '/singleToyDetails/:id',
            //     element: <PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
            //     loader: ({ params }) => fetch(`http://localhost:5000/allToys/${params.id}`)
            // },
            {
                path: '/catDetails',
                element: <PrivateRoute><CatDetails></CatDetails></PrivateRoute>,
                // loader: ({ params }) => fetch(`http://localhost:5000/allToys/${params.id}`)
            },
            {
                path: '/updateData/:id',
                element: <Updatedata></Updatedata>,
                loader: ({ params }) => fetch(`http://localhost:5000/myToys/${params.id}`)
            }


        ],


    },

    {
        path: '*',
        element: <Error></Error>
    }

]);

export default router;