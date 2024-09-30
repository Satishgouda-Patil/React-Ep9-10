import React from "react";
import reactDom from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Restaurant from "./components/Restaurant";

const AppLayout=()=>{
    return (
        <div className="app">
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error/>,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about", 
          element: <About />,
        },
        {
          path: "/contact", 
          element: <Contact />,
        },
        {
          path: "/restaurant/:id", 
          element: <Restaurant />,
        },
      ],
    },
  ]);
  


const main=reactDom.createRoot(document.getElementById("main"));
main.render(<RouterProvider router={router}/>)
