import './App.css';
import Header from "./Components/Header.jsx"
import Body from "./Components/Body.jsx"
import Footer from "./Components/Footer.jsx"
import Shimmer from './Components/Shimmer.jsx';
import { AppRouter } from './Components/AppRouter.js';
import { RouterProvider } from 'react-router-dom';

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
      <Body/>
      {/* <Shimmer/> */}
      <Footer/>
    </div>
  );
}
export default App;
