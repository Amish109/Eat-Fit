import { createBrowserRouter } from "react-router-dom";
import Body from "./Body";
import Contact from "./Contact";
import Cart from "./Cart";
import About from "./About";
// import Header from "./Header";
// import Footer from "./Footer";
import App from "../App";


//======== Outlets =============
export const appRouter= createBrowserRouter([
  {
    path:"/",
    element:<App/>,
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
