import { createBrowserRouter } from "react-router-dom";
import App from "../components/App/App";
import Login from "../components/Login/Login";
import Purchase from "../components/Purchase.jsx/Purchase";
import ProtectedRoute from "../components/common/ProtectedRoute/ProtectedRoute";
import Profile from "../components/Profile/Profile";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <p>Product List</p>,
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
    ],
  },
  {
    path: "*",
    element: <p>Page not founded 404</p>,
  },
]);
