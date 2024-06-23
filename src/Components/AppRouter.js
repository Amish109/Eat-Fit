import { createBrowserRouter } from "react-router-dom";
import Body from "./Body";
import Contact from "./Contact";
import Cart from "./Cart";
import About from "./About";
// import Header from "./Header";
// import Footer from "./Footer";
import App from "../App";
import ErrorPage from "./ErrorPage";
import Menu from "./Menu";


//======== Outlets =============
export const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"cart",
        element:<Cart/>
      },
      {
        path:"",
        element:<Body/>
      },
      // {
      //   path:"menu",
      //   element:<Menu/>,
      //   children:[
      //     {
      //       path:"restaurant",
      //       element:<>Restaurant Data</>
      //     },
      //     {
      //       path:":id",
      //       element:<>Dynamic id</>
      //     }
      //   ]
      // }
      {
        path:"menu/:id",
        element:<Menu/>
      }
    ]
  }
])

// export const appRouter = createBrowserRouter([
//     {
//       path: "/",
//       element:<><Header/><Body/><Footer/></>
//     },
//     {
//       path: "/about",
//       element:<><Header/><About/><Footer/></>
//     },
//     {
//       path: "/contact",
//       element:<><Header/><Contact/><Footer/></>
//     },
//     {
//       path: "/cart",
//       element:<><Header/><Cart/><Footer/></>
//     },
//   ]);
