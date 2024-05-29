import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Contact from "../pages/Contact/Contact";
import PageNotFound from "../pages/PageNotFound";
import Brands from "../pages/Brands/Brands";
import Services from "../pages/Services/Services";
import Showrooms from "../pages/Showrooms/Showrooms";
import Login from "../pages/UserAuth/Login";
import Register from "../pages/UserAuth/Register";
import Dashboard from "../pages/Admin/Dashboard";
import AdminLayout from "../components/layouts/AdminLayout";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "../pages/UserAuth/ForgotPassword";
import ResetPassword from "../pages/UserAuth/ResetPassword";
import UserDashboard from "../pages/User/UserDashboard";
import UserDashboardLayout from "../components/layouts/UserDashboardLayout";
import AdminRoute from "./AdminRoute";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Orders from "../pages/User/Orders";
import ManageBrands from "../pages/Admin/ManageBrands";
import ManageProducts from "../pages/Admin/ManageProducts";
import CreateProduct from "../pages/Admin/CreateProduct";
import UpdateProduct from "../pages/Admin/UpdateProduct";
import Search from "../pages/Shop/Search";
import ProductDetail from "../pages/Admin/ProductDetail";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'shop',
                element: <Shop/>
            },
            {
                path: 'search-results',
                element: <Search/>
            },
            {
                path: 'brands',
                element: <Brands/>
            },
            {
                path: 'showrooms',
                element: <Showrooms/>
            },
            {
                path: 'services',
                element: <Services/>
            },
            {
                path: 'contact',
                element: <Contact/>
            },
            {
                path: 'login',
                element: <AuthenticatedRoute><Login/></AuthenticatedRoute>
            },
            {
                path: 'register',
                element: <AuthenticatedRoute><Register/></AuthenticatedRoute>
            },
            {
                path: 'forgot-password',
                element: <AuthenticatedRoute><ForgotPassword/></AuthenticatedRoute>
            },
            {
                path: 'reset-password/:verificationCode',
                element: <AuthenticatedRoute><ResetPassword/></AuthenticatedRoute>
            },


        ]
    },
    {
        path: '/admin',
        element: <AdminRoute><AdminLayout/></AdminRoute>,
        children: [
            {
                path: 'dashboard',
                element: <Dashboard/>,
            },
            {
                path: 'manageProducts',
                element: <ManageProducts/>,
            },
            {
                path: 'createProduct',
                element: <CreateProduct/>,
            },
            {
                path: 'updateProduct/:slug',
                element: <UpdateProduct/>,
            },
            {
                path: 'productDetail/:slug',
                element: <ProductDetail/>,
            },
            {
                path: 'manageBrands',
                element: <ManageBrands/>,
            },
        ],
    },
    {
        path: '/userAdmin',
        element: <PrivateRoute><UserDashboardLayout/></PrivateRoute>,
        children: [
            {
                path: 'dashboard',
                element: <UserDashboard/>
            },
            {
                path: 'orders',
                element: <Orders/>
            }
        ],
    },
    {
        path: '/*',
        element: <PageNotFound/>
    },
]);


export default router;