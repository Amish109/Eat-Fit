// import { Link, NavLink } from "react-router-dom"
import {  NavLink } from "react-router-dom"
import eaifit from "../Assets/Images/EatFit.png"
import useOnline from "../CustomHooks/useOnline"
import { useContext, useRef, useState } from "react"
import { UserContext } from "../utils/UserContext"
import { useSelector } from "react-redux"
const Header=()=>{
    const cartItems = useSelector((store)=>store.cart.items)
    console.log("cartItems",cartItems);
    const {username} = useContext(UserContext);
    console.log("Userr namefrom context is",username);
    const isOnline = useOnline();
    console.log("Online status : ",isOnline);
   // let logo=`https://in.images.search.yahoo.com/images/view;_ylt=Awrx_e1WtUhmyU8uhoq9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzgxZDk4OTAwOTg0YjM5MjI3YzNjNWUxM2FlZDNlMWE2BGdwb3MDNDMEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dlogo%2Brelated%2Bto%2Beat%2Bfit%26type%3DE211IN714G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D43&w=1500&h=1500&imgurl=lookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D446612994160454&rurl=https%3A%2F%2Fwww.facebook.com%2Featfit.tn%2F&size=30.1KB&p=logo+related+to+eat+fit&oid=81d98900984b39227c3c5e13aed3e1a6&fr2=piv-web&fr=mcafee&tt=Eat%26Fit+%7C+La+Soukra&b=0&ni=21&no=43&ts=&tab=organic&sigr=G3DLv4dOu9AK&sigb=4TgQcvssawc4&sigi=KKE2SVS4Lk6G&sigt=5K3conZGF2fP&.crumb=oVioWVyBe.y&fr=mcafee&fr2=piv-web&type=E211IN714G0`
    // return(
    //     <>
    //         <nav className="navbar navbar-expand-sm bg-light navbar-light">
    //         <div className="container-fluid px-2">
    //             <a className="navbar-brand" href="#"><img src={eaifit} style={{width:"100px"}}/>
    //             <span>{isOnline?"🟢":"🔴"}</span>
                
    //             </a>
    //             {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
    //             <span className="navbar-toggler-icon"></span>
    //             </button> */}
    //             <div className=" justify-content-end" id="collapsibleNavbar">
    //                 {/* //collapse navbar-collapse */}
    //             <ul className="navbar-nav pe-3 cursor-pointer">
    //                 <li className="nav-item ">
    //                 <Link className="nav-link" to="/">Home</Link>
    //                 </li>
    //                 <li className="nav-item ">
    //                 <Link className="nav-link" to="/about">About</Link>
    //                 </li>
    //                 <li className="nav-item ">
    //                 <Link className="nav-link" to="/contact">Contact Us</Link>
    //                 </li>  
    //                 <li className="nav-item ">
    //                 <Link className="nav-link" to="/instamart">Instamart</Link>
    //                 </li>  
    //                 <li className="nav-item ">
    //                 <Link className="nav-link" to="/cart">Cart🛒{cartItems.length}</Link>
    //                 </li>  
    //             </ul>
    //             </div>
    //         </div>
    //         </nav>
            
    //     </>
    // )
    
    const [menuShowedForSmallDevice,setMenuShowedForSmallDevice]=useState(false);
    const menuTabForSmallDevice= useRef();
    const hideAndShowMenu=()=>{
        menuTabForSmallDevice.current.classList.toggle("hidden");
        menuTabForSmallDevice.current.classList.toggle("flex");
        if(Array.from(menuTabForSmallDevice.current.classList).includes("flex")){
            setMenuShowedForSmallDevice(true);
        } else{
            setMenuShowedForSmallDevice(false);
        }
        // Array
    }
    return(
        <div className="box-border mb-2">
            <nav className="flex justify-around  p-3 items-center bg-slate-300">
                <ul className="d-flex">
                    <span>{isOnline?"🟢":"🔴"}</span>
                    <li>eatfit</li>
                    {/* <a className="navbar-brand" href="#"><img src={eaifit} style={{width:"100px"}}/>
                
                </a> */}
                </ul>
                <ul className="text-indigo-500 hidden gap-4 lg:flex">
                   <NavLink to="/" className={({isActive})=>isActive?"text-red-500 cursor-pointer text-decoration-none":"hover:text-red-500 cursor-pointer text-decoration-none"}><li>Home</li></NavLink>
                   <NavLink to="/about" className={({isActive})=>isActive?"text-red-500 cursor-pointer text-decoration-none":"hover:text-red-500 cursor-pointer text-decoration-none"}><li>About</li></NavLink>
                   <NavLink to="/contact" className={({isActive})=>isActive?"text-red-500 cursor-pointer text-decoration-none":"hover:text-red-500 cursor-pointer text-decoration-none"}><li>Contact Us</li></NavLink>
                   <NavLink to="/instamart" className={({isActive})=>isActive?"text-red-500 cursor-pointer text-decoration-none":"hover:text-red-500 cursor-pointer text-decoration-none"}><li>Instamart</li></NavLink>
                   <NavLink to="/cart" className={({isActive})=>isActive?"text-red-500 cursor-pointer text-decoration-none":"hover:text-red-500 cursor-pointer text-decoration-none"}><li>Cart 🛒 <span style={{margin:"-185px 5px",position: "relative",top: "-11px",left: "-11px"}} className="text-white bg-black rounded-full px-1 py-0 text-xs"> {cartItems?.length}</span> 
                   {/* <span className="badge text-bg-danger p-1" style={{margin:"-185px 5px",position: "relative",top: "-11px",left: "-11px"}}>{cartItems?.length}</span> */}
                   
                   </li></NavLink>
                </ul>
                   {/* 
                       margin: -185px 5px;
    position: relative;
    top: -11px;
    left: -11px;
                   <NavLink to="/about" className={({isActive})=>isActive?"text-red-500 cursor-pointer":"hover:text-red-500 cursor-pointer"}><li>About</li></NavLink>
                   
                   */}
                {/* <button className="lg:hidden  " onClick={hideAndShowMenu}>
                    Test
                </button> */}
                <div className="transition-all flex flex-col gap-0 items-center lg:hidden" onClick={hideAndShowMenu}>
                    <p className={menuShowedForSmallDevice?"border border-black w-5 rotate-45 p-0 mb-1.5":"border border-black w-5 p-0 mb-1.5"}></p>
                    <p className={menuShowedForSmallDevice?"hidden":"border border-black w-5 p-0 mb-1.5"}></p>
                    <p className={menuShowedForSmallDevice?"border border-black w-5 -rotate-45 p-0 mb-1.5":"border border-black w-5 p-0 mb-1.5"}></p>
                </div>
              
            </nav>
            <div className=" justify-end  hidden" ref={menuTabForSmallDevice}>
                <ul className="text-indigo-500 w-2/5 justify-center lg:hidden gap-4 flex flex-col absolute mt-0.5 px-20 bg-slate-300/90 border border-black text-center items-center">
                <NavLink to="/" className={({isActive})=>isActive?"text-red-500 cursor-pointer text-decoration-none":"hover:text-red-500 cursor-pointer text-decoration-none"}><li>Home</li></NavLink>
                   <NavLink to="/about" className={({isActive})=>isActive?"text-red-500 cursor-pointer text-decoration-none":"hover:text-red-500 cursor-pointer text-decoration-none"}><li>About</li></NavLink>
                   <NavLink to="/contact" className={({isActive})=>isActive?"text-red-500 cursor-pointer text-decoration-none":"hover:text-red-500 cursor-pointer text-decoration-none"}><li>Contact Us</li></NavLink>
                   <NavLink to="/instamart" className={({isActive})=>isActive?"text-red-500 cursor-pointer text-decoration-none":"hover:text-red-500 cursor-pointer text-decoration-none"}><li>Instamart</li></NavLink>
                   <NavLink to="/cart" className={({isActive})=>isActive?"text-red-500 cursor-pointer text-decoration-none":"hover:text-red-500 cursor-pointer text-decoration-none"}><li>Cart🛒 {cartItems?.length}</li></NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Header