// import { useState } from "react";
import Input from "./components/Input";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import CardProduct from "./components/CardProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/CardProduct",
    element: <CardProduct />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
