// import { useState } from "react";
import Input from "./components/Input";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Product from "./pages/Product";
import DetailProduct from "./pages/DetailProduct";
import Checkout from "./pages/Checkout";
import History from "./pages/History";
import DetailOrder from "./pages/DetailOrder";
import Profile from "./pages/Profile";
import { AuthProvider } from "./components/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/Product",
    element: <Product />,
  },
  {
    path: "/DetailProduct",
    element: <DetailProduct />,
  },
  {
    path: "/Checkout",
    element: (
      <ProtectedRoute>
        <Checkout />
      </ProtectedRoute>
    ),
  },
  {
    path: "/History",
    element: (
      <ProtectedRoute>
        <History />
      </ProtectedRoute>
    ),
  },
  {
    path: "/DetailOrder",
    element: (
      <ProtectedRoute>
        <DetailOrder />
      </ProtectedRoute>
    ),
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </AuthProvider>
  );
}

export default App;
