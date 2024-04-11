import { useState } from "react";
import Home from "./pages/Home";
import SecondHome from "./pages/SecondHome";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/secondPage",
      element: <SecondHome></SecondHome>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
