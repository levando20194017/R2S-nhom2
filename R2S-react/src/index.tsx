import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout";
import LoginPage from "./screens/Login";
import store from "./store";
import { Provider } from "react-redux";
<<<<<<< HEAD
import { Home } from "./screens/Home";
import { HomePage } from "./components/HomePage";
=======
import { HomePage } from "./screens/HomePage";
>>>>>>> ad9ed5cce6e6a9d7c858e3943b8b53cdcc8f2920
import SignUpPage from "./screens/SignUp";
import ProfilePage from "./screens/Profile";
import ForgotPasswordPage from "./screens/ForgotPassword";
import ChangePasswordPage from "./screens/ChangePassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <p>Not found</p>,
    children: [
      {
<<<<<<< HEAD
        path: "/student",
        element: <h1>Student Page</h1>,
      },
      {
        path: "/home",
=======
        path: "/",
>>>>>>> ad9ed5cce6e6a9d7c858e3943b8b53cdcc8f2920
        element: <HomePage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/changePassword",
    element: <ChangePasswordPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
