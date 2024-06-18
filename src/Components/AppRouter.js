import { createBrowserRouter } from "react-router-dom";
import Body from "./Body";
import Contact from "./Contact";
import Cart from "./Cart";
import About from "./About";
import Header from "./Header";
import Footer from "./Footer";

export const AppRouter = createBrowserRouter([
    {
      path: "/",
      element:<><Header/><Body/><Footer/></>
    },
    {
      path: "/about",
      element:<><Header/><About/><Footer/></>
    },
    {
      path: "/contact",
      element:<><Header/><Contact/><Footer/></>
    },
    {
      path: "/cart",
      element:<><Header/><Cart/><Footer/></>
    },
  ]);
  