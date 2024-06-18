import { createBrowserRouter } from "react-router-dom";
import Body from "./Body";
import Contact from "./Contact";
import Cart from "./Cart";
import About from "./About";

export const AppRouter = createBrowserRouter([
    {
      path: "/",
      element:<Body/>
    },
    {
      path: "/about",
      element:<About/>
    },
    {
      path: "/contact",
      element:<Contact/>
    },
    {
      path: "/cart",
      element:<Cart/>
    },
  ]);
  