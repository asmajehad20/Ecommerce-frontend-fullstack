import { createBrowserRouter } from "react-router-dom";
import Login from "./src/components/login/Login";
import Home from "./src/components/home/Home";
import Register from "./src/components/register/Register";
import MainLayout from "./src/layout/MainLayout";
import Products from "./src/components/products/Products";
import Cart from "./src/components/cart/Cart";
import UserContextProvider from "./src/context/UserContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'login',
                element:<Login/>
            },
            {
                path: 'register',
                element:<Register/>
            },
            {
                path: 'products',
                element: <Products />
            },
            {
                path: 'cart',
                element: 
                // <UserContextProvider>
                    <Cart/>
                // </UserContextProvider>
                
            }
        ]
    }
    
]);

export default router;