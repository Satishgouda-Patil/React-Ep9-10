import React ,{lazy, Suspense} from "react";
import reactDom from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Restaurant from "./components/Restaurant";

About=lazy(() => import("./components/About"));
const AppLayout=()=>{
    return (
        <div className="app h-screen">
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
          element:<Suspense fallback={<h1>Loading...... </h1>}>
             <About />
          </Suspense>,
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
