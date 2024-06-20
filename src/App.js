import './App.css';
import Header from "./Components/Header.jsx"
import Footer from "./Components/Footer.jsx"
import { Outlet, RouterProvider } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   <Header/>
    //   <RouterProvider router={AppRouter} />
    //   {/* <Body/> */}
    //   {/* <Shimmer/> */}
    //   <Footer/>
    // </div>
    <div className="App">
      <Header/>
      {/* <Body/> */}
      <Outlet/>
      <Footer/>
    </div>
  );
}
export default App;
