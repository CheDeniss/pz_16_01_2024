import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartProvider from "./components/cartContext.jsx";
import Layout from "./components/layout.jsx";
import Error from "./components/error.jsx";
import All from "./components/all.jsx";
import Detail from "./components/detail.jsx";
import Cart from "./components/cart.jsx";

const route = createBrowserRouter(
    [{
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        { path: "/all", element: <All /> },
        { path: "/details/:id", element: <Detail /> },
        {path: "/cart", element: <Cart/>}
      ]
    }]
);

function App() {
  return (
      <CartProvider>
        <RouterProvider router={route} />
      </CartProvider>
  );
}

export default App;
