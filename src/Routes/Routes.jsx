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
                element: <AllToys></AllToys>
            },
            {
                path: '/addAToy',
                element: <AddAToy></AddAToy>
            },
            {
                path: '/myToys',
                element: <MyToys></MyToys>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },


        ],


    },

    {
        path: '*',
        element: <Error></Error>
    }

]);

export default router;