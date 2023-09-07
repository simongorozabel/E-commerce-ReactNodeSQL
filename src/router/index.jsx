import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Purchase from "../components/Purchase.jsx/Purchase";
import ProtectedRoute from "../components/common/ProtectedRoute/ProtectedRoute";
import Profile from "../components/Profile/Profile";
import Home from "../components/Home/Home";
import { homeLoader } from "./loader/homeLoader";
import ProductDetail from "../components/ProductDetail/ProductDetail";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/",
        loader: homeLoader,
        element: <Home />,
      },
      {
        path: "/purchase",
        element: (
          <ProtectedRoute>
            <Purchase />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/product/:productId",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <p>Page not founded 404</p>,
  },
]);
