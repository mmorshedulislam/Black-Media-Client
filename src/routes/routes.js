import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import PostDetails from "../Pages/Home/Home/PostDetails";
import Login from "../Pages/Login/Login";
import Media from "../Pages/Media/Media";
import Messages from "../Pages/Messages/Messages";
import Profile from "../Pages/Profile/Profile";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/media",
        element: (
          <PrivateRoute>
            <Media></Media>
          </PrivateRoute>
        ),
      },
      {
        path: "/messages",
        element: (
          <PrivateRoute>
            <Messages></Messages>
          </PrivateRoute>
        ),
      },
      {
        path: "/postdetails/:id",
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_PORT}/post/${params.id}`),
        element: (
          <PrivateRoute>
            <PostDetails></PostDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "signup",
    element: <Signup></Signup>,
  },
]);

export default router;
