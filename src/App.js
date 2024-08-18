import './App.css';
import Header from "./Components/Header.jsx"
import Footer from "./Components/Footer.jsx"
import { Outlet } from 'react-router-dom';
import { UserContext } from './utils/UserContext.js';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './utils/store.js';
function App() {
  // const [name,setName] = useState({});
  const [name,setName] = useState("");
  const [carousalData,setCarousalData] = useState([]);
  useEffect(()=>{
    setName('AmishTiwari');
  },[])
  return (
    // <div className="App">
    //   <Header/>
    //   <RouterProvider router={AppRouter} />
    //   {/* <Body/> */}
    //   {/* <Shimmer/> */}
    //   <Footer/>
    // </div>
<Provider store={store}>
  <UserContext.Provider value={{username:name,setName,carousalData,setCarousalData}}>
      <div className="App">
        <Header/>
        {/* <Body/> */}
        <Outlet/>
        <Footer/>
      </div>
  </UserContext.Provider>
</Provider>

  );
}
export default App;
